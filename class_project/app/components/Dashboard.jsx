import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Col, Badge, Row, Jumbotron, Panel, Table, Button} from "react-bootstrap";

const statsAPI = 'http://localhost:3000/stats';
const coursesAPI = 'http://localhost:3000/courses';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          statsItems: [],
          coursesItems: []

        }; 
      }

      componentDidMount = () => {
        fetch(statsAPI)
        .then(function(response) {
            return response.json();
        }).then((stats) => {
            this.setState({
                statsItems: stats
            });
            return fetch(coursesAPI);
        }).then(function(response){
            return response.json();
        }).then((courses)=>{
            this.setState({
                isLoaded: true,
                coursesItems: courses
            });
        });  
        
    }

     convertDate(stringdate)
        {
            // Internet Explorer does not like dashes in dates when converting, 
            // so lets use a regular expression to get the year, month, and day 
            var DateRegex = /([^-]*)-([^-]*)-([^-]*)/;
            var DateRegexResult = stringdate.match(DateRegex);
            var DateResult;
            var StringDateResult = "";

            // try creating a new date in a format that both Firefox and Internet Explorer understand
            try
            {
                DateResult = new Date(DateRegexResult[2]+"/"+DateRegexResult[3]+"/"+DateRegexResult[1]);
            } 
            // if there is an error, catch it and try to set the date result using a simple conversion
            catch(err) 
            { 
                DateResult = new Date(stringdate);
            }

            // format the date properly for viewing
            StringDateResult = (DateResult.getMonth()+1)+"/"+(DateResult.getDate()+1)+"/"+(DateResult.getFullYear());

            return StringDateResult;
        }

    render() {
        const { error, isLoaded, statsItems,coursesItems  } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>Loading...</div>;
        } else {
            return (   
                <div>
                    <div className="container">
                        <Jumbotron>
                        <h2>Welcome to Code.Hub Dashboard!</h2>
                        <h4>Manage everything and have fun!</h4>
                        </Jumbotron>
                    </div>
                    <div className="container">
                        <Row>
                            {statsItems.map(stat => (                                
                                <Col xs={12} sm={6} md={6} lg={3} key={stat.id}>
                                    <Panel className="dashboard-panel">
                                        <Panel.Body>
                                            <Col xs={8} sm={8}>
                                                <h5>{stat.title.toUpperCase()}:</h5>
                                            </Col>
                                            <Col xs={4} sm={4} >
                                                <Badge>{stat.amount} </Badge>
                                            </Col>   
                                        </Panel.Body>                                     
                                    </Panel>                                   
                                </Col>                                    
                            ))}                            
                        </Row>
                        <div className="table-container">
                            <div className="table-header">
                            <h3>Last 5 Courses</h3>
                            </div>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Bookable</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {coursesItems.slice(-5).map(course => (
                                    <tr key={course.id}>
                                    <td>&#8505;</td>
                                    <td>{course.title}</td>
                                    {course.open && <td>&#10004;</td>}
                                    {!course.open && <td>&#10006;</td>}
                                    <td>{course.price.normal}&nbsp;{'\u20AC'}</td>
                                    <td>{this.convertDate(course.dates.start_date)}&nbsp;-&nbsp;{this.convertDate(course.dates.end_date)}</td>
                                    <td style={{textAlign: 'right'}}><Link className="btn btn-xs btn-info" to={`/courses:${course.id}`}>View details</Link></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                            <div className="table-footer">
                                <Link className="btn btn-default" to="/courses">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Dashboard;