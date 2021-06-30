import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return(
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p className="definition">{definition.definition}</p>
                        <p className="definition-example">{definition.example}</p>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div>

    )
}

// Looping through all definitions (a word can have the same meaning (=noun) 
// but with multiples definitions depending on the context)