import React  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Routing from "./Routing";

const  App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routing />
            </div>
        </Router>
    )
}

export default App;

 