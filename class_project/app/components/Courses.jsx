import React from "react";
import {Row,Col,Image,Button} from 'react-bootstrap'

const coursesAPI = 'http://localhost:3000/courses';


function CoursePanel(props) {
    return (
        <div>
            <Col lg={4} md={6} sm={12} key = {props.id}>
                <div className ="grid-item">
                    <div className ="grid-item-title">
                        <div componentclass="h3">{props.title}</div>
                    </div>
                    <Image className="grid-item-image" src={props.imagePath} responsive/>
                    <div className ="grid-item-body">
                            Price: <b>{props.price}{'\u20AC'}</b> | Bookable: { props.open && <span>&#10004;</span>} { !props.open && <span>&#10006;</span>}
                            <br/>
                            Duration: <b>{props.days}</b>
                            <br/>
                            Dates: <b> {props.dates.start_date} - {props.dates.end_date} </b>
                    </div>
                    <div className="grid-item-button"> <Button href={'courses/' + props.id} >View</Button> </div>
                </div>
            </Col>
        </div>
    );
}

class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isCoursesLoaded : false,
          courses: []
        };
      }

    componentDidMount = () => {
        fetch(coursesAPI)
        .then(function(response) {
            return response.json();
        }).then((myJson) => {            
            this.setState({
                isCoursesLoaded: true,
                courses: myJson
            });
        });
    }

    render() {
        const { error, isCoursesLoaded, courses } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isCoursesLoaded) {
            return <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>Loading...</div>;
        } else {
            return (
                <div>
                    <ul>
                        <span className="main-title">Courses</span>
                            <Row className="grid">
                            {courses.map(item => (
                                <CoursePanel    imagePath   = {item.imagePath} 
                                                price       = {item.price.normal} 
                                                title       = {item.title} 
                                                id          = {item.id} 
                                                days        = {item.duration} 
                                                dates       = {item.dates}
                                                open        = {item.open}
                                                key         = {item.id}/>
                            ))}
                            </Row>
                    </ul>
                </div>
            );
        }
    }
}

export default Courses;