import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./app.css";
import "./css/FormStyles.css"

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
,
  document.getElementById("app")
);
