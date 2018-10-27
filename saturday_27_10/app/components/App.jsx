import React from "react";
import "react-bootstrap"
import DataFetching from "./DataFetching";
import BasicExample from "./BasicExample";

const App = (props) => {
    return (
        <div>
            <DataFetching />
            <BasicExample />
        </div>
    )
}

export default App;