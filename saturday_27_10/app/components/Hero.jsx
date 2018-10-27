import React from "react";


const  Hero = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.heroName}</h3>
        </div>
    )
}

export default  Hero;
