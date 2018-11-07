import React from "react";
import {Grid,Row,Col,Panel,Image,Button} from 'react-bootstrap'

const coursesAPI = 'http://localhost:3000/courses';


function CoursePanel(props) {
    return (
        <div>
            <Col lg={4} md={6} sm={12} key = {props.id}>
                <Panel className ="panel">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{props.title}</Panel.Title>
                    </Panel.Heading>
                    <Image src={props.imagePath} responsive/>
                    <Panel.Body>
                        Price: <b>{props.price}{'\u20AC'}</b> | Bookable:
                        <br/>
                        Duration: <b>{props.days}</b>
                        <br/>
                        Dates: <b> {props.dates.start_date} - {props.dates.end_date} </b>
                        <br/>
                        <Col lg = {3} mdPush ={9}> <Button href={'courses/' + props.id} >View</Button> </Col>
                    </Panel.Body>
                </Panel>
            </Col>
        </div>
    );
}

class Courses extends React.Component {

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
                            {items.map(item => (
                                <CoursePanel    imagePath = {item.imagePath} 
                                                price = {item.price.normal} 
                                                title = {item.title} 
                                                id = {item.id} 
                                                days = {item.duration} 
                                                dates = {item.dates} 
                                                key={item.id}/>
                            ))}
                            </Row>
                        </Grid>
                    </ul>
                </div>
            );
        }
    }
}

export default Courses;