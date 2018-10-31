import React  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Course from "./Course";
import AddCourse from "./AddCourse";


const  Header = (props) => {
    return (
        <Router>
            <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
                <Link to="/">Dashboard</Link>
                <Link to="/courszes">Courses</Link>
                <Link to="/courses/:id">Course</Link>
                <Link to="/add-course">Add Course</Link>

                <hr />

                <Route exact path="/" component={Dashboard} />
                <Route path="/courses" component={Courses} />
                <Route path="/courses/:id" component={Course} />
                <Route path="/add-course" component={AddCourse} />
            </div>  
        </Router>
    )
}

export default Header;

 