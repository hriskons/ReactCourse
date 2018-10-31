import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./app.css";
import {Panel} from "react-bootstrap";


ReactDOM.render(
  <Panel>
    <Panel.Body>
      <Header></Header>
    </Panel.Body>
  </Panel>
,
  document.getElementById("app")
);
