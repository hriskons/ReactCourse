import React  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Course from "./Course";
import AddCourse from "./AddCourse";
import NotFoundPage from "./NotFoundPage";

const Routing = () => {
    return (
        <div className="app-main-component">
            <Switch>
                <Route exact path="/" component={ Dashboard } />
                <Route path="/courses" component={ Courses } />
                <Route path="/courses/:id" component={ Course } />
                <Route path="/add-course" component={ AddCourse } />       
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    );
}

export default Routing;

 