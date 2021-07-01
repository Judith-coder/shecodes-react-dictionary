import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
    return(
        <div className="Meaning">
            <section>
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p className="definition">{index + 1}. {definition.definition}</p>
                        <p className="definition-example">Example: {definition.example}</p>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}</section>
        </div>

    )
}

// Looping through all definitions (a word can have the same meaning (=noun) 
// but with multiples definitions depending on the context)