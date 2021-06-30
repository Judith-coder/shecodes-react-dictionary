import React from "react";

export default function Phonetic(props){
function handleClick(){
    let sound = new Audio(props.phonetic.audio)
    sound.play()
}

    if (props.phonetic){
        return (
            <div className="Phonetic">
                <p>{props.phonetic.text}</p>
                <i className="fas fa-headphones" onClick={handleClick} />
            </div>
        )
    } else {
        return null
    }
}