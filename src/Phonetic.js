import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
function handleClick(){
    let sound = new Audio(props.phonetic.audio)
    sound.play()
}

    if (props.phonetic){
        return (
            <div className="Phonetic">
                <i className="fas fa-headphones" onClick={handleClick} /><p>{props.phonetic.text}</p>
                
            </div>
        )
    } else {
        return null
    }
}