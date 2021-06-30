import React from "react";

export default function Definition(props){
    return(
        <div className="Definition">
            <p className="definition">{props.definition.definition}</p>
            <p className="definition-example">{props.definition.example}</p>
        </div>
    )
}