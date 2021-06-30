import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
let [word, setWord] = useState("");

function handleApiResponse(response){
    console.log(response.data[0])
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
</div>

    )
}