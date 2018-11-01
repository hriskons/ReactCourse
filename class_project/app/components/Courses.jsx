import React from "react";
import {Grid,Row,Col,Panel,Image,Button} from 'react-bootstrap'

const coursesAPI = 'http://localhost:3000/courses';


function CoursePanel(props) {
    return (
        <div>
            <Col lg={4} md={6} sm={12} key = {props.id} clearfix>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{props.title}</Panel.Title>
                    </Panel.Heading>
                    <Image src={props.imagePath} responsive />
                    <Panel.Body>
                        Price: <b>{props.price}{'\u20AC'}</b> | Bookable:
                        <br/>
                        Duration: <b>{props.days}</b>
                        <br/>
                        Dates: <b> {props.dates.start_date} - {props.dates.end_date} </b>
                        <br/>
                        <Button>View</Button>
                    </Panel.Body>
                </Panel>
            </Col>
        </div>
    );
}

function CoursesGrid (props) {
    let rows = [];
    for (var i = 0; i <= (+props.items.length) % 3 ; i++){
        let cell = [];

        for (var idx = i*3; idx < i * 3 + 3 && idx < (+props.items.length); idx++){
            cell.push(
                <CoursePanel imagePath = {props.items[idx].imagePath} price = {props.items[idx].price.normal} title = {props.items[idx].title} id = {props.items[idx].id} days = { props.items[idx].duration } dates = {props.items[idx].dates}key={idx}/>
            );
        }

        rows.push(<Row className="show-grid" key={i}>{cell}</Row>)
    }
    return (
        <div>
            {rows}
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
            return <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>Loading...</div>;
        } else {
            return (
                <div>
                    <ul className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
                        Contacts
                        <Grid>
                            <Row className="show-grid">
                            {items.map(item => (
                                <CoursePanel imagePath = {item.imagePath} price = {item.price.normal} title = {item.title} id = {item.id} days = { item.duration } dates = {item.dates} key={item.id}/>
                            ))}
                            </Row>
                        </Grid>
                    </ul>
                </div>
            );
        }
    }
}

const CourseItem = (props) => {
    return(
        <div>
        </div>
    )
}



export default Courses;