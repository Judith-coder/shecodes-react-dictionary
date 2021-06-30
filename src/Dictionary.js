import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
let [word, setWord] = useState("");
let [results, setResults] = useState(null);

function handleApiResponse(response){
    setResults(response.data[0])
}

function handleSubmitWord(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    axios.get(apiUrl).then(handleApiResponse)

    // API documentation: https://dictionaryapi.dev/
}

function handleWordUpdate(event){
    setWord(event.target.value);
}


    return (
<div className="Dictionary">
    <h2>What word are you looking for ? </h2>
    <form onSubmit={handleSubmitWord}>
        <input type="search" placeholder="Name your word" autoFocus={true} onChange={handleWordUpdate} />
        <input type="submit" value="Search 🧐🤔🔍" />
    </form>
    <Results data={results} />
</div>

    )
}