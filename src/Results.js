import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props){
    if (props.data){
        return (
                <div className="Results">
                    <section id="section-results">
                    <h3>{props.data.word}</h3>
                    {props.data.phonetics.map(function(phonetic, index){
                        return(
                            <div key={index}>
                                <Phonetic phonetic={phonetic} />
                            </div>
                        )
                    })}
                    </section>
                    {props.data.meanings.map(function(meaning, index){
                        return(<div key={index}>
                            <Meaning meaning={meaning} />
                        </div>)
                    })}
                </div>)
    } else {
        return null
    }
}

// Looping through all meanings (noun, adjective, verb)