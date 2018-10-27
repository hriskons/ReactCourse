import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

import Course from "./components/Course"
import AddCourse from "./components/AddCourse"
import Courses from "./components/Courses"
import Dashboard from "./components/Dashboard"

ReactDOM.render(
  <Router>
    <Dashboard />
      <Route exact path="/" component={Dashboard} />
    <Route path="/courses" component={Courses} />
    <Route path="/courses/:id" component={Course} />
    <Route path="/add-course" component={AddCourse} />
  </Router>
,
  document.getElementById("app")
);
