import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,  NavLink } from "react-router-dom";
// import WordCountApp from "./examples/01/WordCountApp";
// import LeapYearApp from "./examples/02/LeapYearApp";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div className="columns">
        <div className="column column is-3">
          <aside className="menu">
            <h2 className="menu-label">Examples</h2>
            <p className="menu-label">Unit testing</p>
            <ul className="menu-list">
              <li><NavLink to="/01" activeClassName="is-active">01</NavLink></li>
              <li><NavLink to="/02" activeClassName="is-active">02</NavLink></li>
            </ul>
          </aside>
        </div>
        <div className="column column is-9">
          <h1 className="is-size-3">React Advanced Topics</h1>
          <br />
          {/* <Route exact path="/01" component={WordCountApp} />
          <Route exact path="/02" component={LeapYearApp} /> */}
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
