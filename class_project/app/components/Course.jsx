import React from "react";
import {Grid,Row,Col,PageHeader,Image,Button,Panel} from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';

const coursesAPI = 'http://localhost:3000/courses';


function CourseDescription(props) {
    return (
        ReactHtmlParser(props.description)
    );
}


function CourseDetailPanel(props) {
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
               <Row>
                   <Col>
                        <CourseDescription description = {props.description}/>
                   </Col>
               </Row>
               <Row>
                   <Button>Edit</Button>
                   <Button bsStyle="danger">Delete</Button>
               </Row>
               <Row>
                   <h3>Instructors</h3>
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
          isLoaded: false,
          items: []
        };
    }

    componentDidMount = () => {
        fetch(coursesAPI)
        .then(function(response) {
            return response.json();
        }).then((myJson) => {
            console.log(myJson);
            this.setState({
                isLoaded: true,
                items: myJson
            });
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        let courseId = this.props.match.params.id - 1;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>Pegoo</div>;
        } else {
            return (
                <div>
                    <ul className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
                        Contacts
                        <Grid>
                            <Row className="show-grid">
                                <CourseDetailPanel    imagePath = {items[courseId].imagePath} 
                                                price = {items[courseId].price.normal} 
                                                title = {items[courseId].title} 
                                                id = {items[courseId].id} 
                                                days = {items[courseId].duration} 
                                                dates = {items[courseId].dates} 
                                                key={items[courseId].id}
                                                description={items[courseId].description}/>
                            </Row>
                        </Grid>
                    </ul>
                </div>
            );
        }
    }
}

export default Course;