import React from "react";
import {Grid,Row,Col,PageHeader,Image,Button} from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';

const coursesAPI = 'http://localhost:3000/courses';
const instructorsApi = 'http://localhost:3000/instructors';

function CourseDescription(props) {
    return (
        ReactHtmlParser(props.description)
    );
}

function Instructors(props){
    return(
        <div key = {props.id} >
            <h2>{props.name.first} {props.name.last} <small className="text-muted">({props.dob})</small></h2>
            <h5>Email: <a href={"mailto:" + props.email}>{props.email}</a> | <a href={props.linkedin}>Linkedln</a></h5>
            <h5>{props.bio}</h5>
        </div>
    );
}


function CourseDetailPanel(props) {

    function handleClick() {
        fetch(coursesAPI + '/' + props.id, {
                method: 'DELETE', })
        .then(function(response) {
            return response.json();
        });
    }
    

    return (
        <div>
            <PageHeader>
                {props.title} <small>({props.id})</small>
            </PageHeader>
            <Col>
               <Image className="image-banner" src = {props.imagePath}/>
               <Row>
                   <Col lg={2} md={3} sm={6} key = {props.id}>
                        Price: {props.price}{'\u20AC'}
                   </Col>
                   <Col lg = {8} mdPush ={4}> Duration: {props.days} </Col>
               </Row>
               <Row>
                    <Col lg={2} md={3} sm={6} key = {props.id}>
                        Bookable:
                   </Col>
                   <Col lg = {8} mdPush ={4}> Dates: {props.dates.start_date} - {props.dates.end_date} </Col>
               </Row>
               <br/>
               <Row>
                   <Col lg={12} md={12} sm={12} key = {props.id}>
                        <CourseDescription description = {props.description}/>
                   </Col>
               </Row>
               <Row>
                   <Col lg={12} md={12} sm={12} key = {props.id}> 
                        <Button>Edit</Button> &nbsp;
                        <Button bsStyle="danger" onClick={ handleClick }> Delete</Button>
                   </Col>
               </Row>
            </Col>
        </div>
    );
}

class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCoursesLoaded: false,
            isInstructorsLoaded: false,
            courses: [],
            instructors: []
        };
    }

    componentDidMount = () => {
        fetch(coursesAPI)
        .then(function(response) {
            return response.json();
        }).then((myJson) => {
            console.log(myJson);
            this.setState({
                isCoursesLoaded: true,
                courses: myJson
            });
        });

        fetch(instructorsApi)
        .then(function(response) {
            return response.json();
        }).then((myJson) => {
            console.log(myJson);
            this.setState({
                isInstructorsLoaded: true,
                instructors: myJson
            });
        });
    }

    render() {
        const { error, isCoursesLoaded, isInstructorsLoaded, courses, instructors} = this.state;
        let courseId = this.props.match.params.id - 1;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isCoursesLoaded || !isInstructorsLoaded) {
            return <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>Pegoo</div>;
        } else {
            return (
                <div>
                    <ul className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
                        Contacts
                        <Grid>
                            <Row className="show-grid">
                                <CourseDetailPanel  imagePath = {courses[courseId].imagePath} 
                                                    price = {courses[courseId].price.normal} 
                                                    title = {courses[courseId].title} 
                                                    id = {courses[courseId].id} 
                                                    days = {courses[courseId].duration} 
                                                    dates = {courses[courseId].dates} 
                                                    description={courses[courseId].description}
                                                    instructorsData = {instructors}/>
                            </Row>
                            <Row>
                                <h1>Instructors</h1>
                                {courses[courseId].instructors.map(item => (
                                                <Instructors    name   = {instructors[+item - 1].name}
                                                                email  = {instructors[+item - 1].email}
                                                                id      = {instructors[+item - 1].id}
                                                                dob     = {instructors[+item - 1].dob}
                                                                linkedin = {instructors[+item - 1].linkedin}
                                                                bio     = {instructors[+item - 1].bio}
                                                                key = {item}/>
                                    ))}
                            </Row>
                        </Grid>
                    </ul>
                </div>
            );
        }
    }
}

export default Course;