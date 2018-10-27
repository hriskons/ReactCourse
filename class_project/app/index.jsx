import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from "./components/Course"
import AddCourse from "./components/AddCourse"
import Courses from "./components/Courses"
import Dashboard from "./components/Dashboard"

ReactDOM.render(
  <Router>
    <div>
      <Dashboard />

      <Route exact path="/" component={Dashboard} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:id" component={Course} />
      <Route path="/add-course" component={AddCourse} />  
    </div>
    
  </Router>
,
  document.getElementById("app")
);
