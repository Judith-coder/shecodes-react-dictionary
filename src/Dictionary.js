import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
let [word, setWord] = useState("");
let [results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);

function handleApiResponse(response){
    setResults(response.data[0])
}

function handlePexelsApiResponse(response){
    setPhotos(response.data.photos);
}

function handleSubmitWord(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`

    let pexelsApiKey = '563492ad6f91700001000001a25d320f01e34eb1811e6fb4d795f2c6';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;

    // Check if the URL is valid
    var request = new XMLHttpRequest();
    request.open("GET", apiUrl, true);
    request.send();
    request.onload = function () {
      if (request.status === 404) {
        alert(`I did not understand "${word}", please re-type your word! 🙂`);
        window.location.reload();
      } else {
        axios.get(apiUrl).then(handleApiResponse);
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsApiResponse);
      }
 };

    // API documentation: https://dictionaryapi.dev/
}

function handleWordUpdate(event){
    setWord(event.target.value);
}


    return (
<div className="Dictionary">
    <section id="section-searchEngine">
    <h2>What word are you looking for ? </h2>
    <form onSubmit={handleSubmitWord}>
        <input id="input-word" type="search" placeholder="Name your word" autoFocus={true} onChange={handleWordUpdate} />
        <input id="input-search" type="submit" value="Search 🧐" />
    </form>
    <p className="hints">Suggested words: wine, travel, art</p>
    </section>
    <Results data={results} />
    <Photos photos={photos} />
</div>

    )
}