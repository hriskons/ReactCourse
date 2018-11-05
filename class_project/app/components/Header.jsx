import React  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Course from "./Course";
import AddCourse from "./AddCourse";

const  Header = () => {
    return (
        <div className="header">
            <Link to="/">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/add-course">Add Course</Link>             
        </div>  
    );
}

export default Header;

 