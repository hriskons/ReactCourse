import React from "react";
import {Grid,Row,Col,PageHeader,Image,Button} from 'react-bootstrap'

const coursesAPI = 'http://localhost:3000/courses';


function CourseDetailPanel(props) {
    return (
        <div>
            <PageHeader>
                {props.title} <small>({props.id})</small>
            </PageHeader>
            <Col>
               <Image src = {props.imagePath} width="400px"/>
               <Row>
                   <Col lg={2} md={3} sm={6} key = {props.id}>
                        Price: {props.price}{'\u20AC'}
                   </Col>
                   <Col lg = {4} mdPush ={8}> Duration: {props.days} </Col>
               </Row>
               <Row>
                    <Col lg={2} md={3} sm={6} key = {props.id}>
                        Bookable:
                   </Col>
                   <Col lg = {4} mdPush ={8}> Dates: {props.dates.start_date} - {props.dates.end_date} </Col>
               </Row>
               <Row>
                   <Col>
                        {props.description}
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
            console.log(myJson);
            this.setState({
                isLoaded: true,
                items: myJson
            });
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
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
                                <CourseDetailPanel    imagePath = {items[0].imagePath} 
                                                price = {items[0].price.normal} 
                                                title = {items[0].title} 
                                                id = {items[0].id} 
                                                days = {items[0].duration} 
                                                dates = {items[0].dates} 
                                                key={items[0].id}
                                                description={items[0].description}/>
                            </Row>
                        </Grid>
                    </ul>
                </div>
            );
        }
    }
}

export default Course;