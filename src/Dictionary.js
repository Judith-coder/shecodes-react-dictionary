import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [word, setWord] = useState("");

function handleSubmit(event){
    event.preventDefault();
    alert(`Searching for ${word}`)
}

function handleWordUpdate(event){
    setWord(event.target.value);
}


    return (
<div className="Dictionary">
    <h2>What word are you looking for ? </h2>
    <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Name your word" autoFocus={true} onChange={handleWordUpdate} />
        <input type="submit" value="Search 🧐🤔🔍" />
    </form>
</div>

    )
}