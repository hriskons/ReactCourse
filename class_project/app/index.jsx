import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import {Panel} from "react-bootstrap"

ReactDOM.render(
  <Panel>
    <Panel.Body>
      <Dashbord />
    </Panel.Body>
  </Panel>
,
  document.getElementById("app")
);
