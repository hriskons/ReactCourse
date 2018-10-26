import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./components/App"
import {Panel, Badge} from "react-bootstrap"

ReactDOM.render(
  <Panel>
    <Panel.Body>
      <App title = {"Hero"} buttonName = {"Button"}/>
    </Panel.Body>
  </Panel>
,
  document.getElementById("app")
);
