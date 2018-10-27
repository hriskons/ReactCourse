import React from "react";
import Box from "./Box"
import Hero from "./Hero"
import "react-bootstrap"

const App = (props) => {
    return (
        <div>
            <button>{props.buttonName}</button>
            <h1>{props.title}</h1>
            <Hero heroName = {"Superman"}></Hero>
            <Box boxType = {"Red Box"}></Box>
        </div>
    )
}

export default App;