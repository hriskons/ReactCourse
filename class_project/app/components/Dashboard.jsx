import React from "react";

import {Col, Badge, Row, Jumbotron, Panel} from "react-bootstrap";

const coursesAPI = 'http://localhost:3000/stats';


class Dashboard extends React.Component {

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
                    <div className="container">
                        <Jumbotron>
                        <h2>Welcome to Code.Hub Dashboard!</h2>
                        <h4>Manage everything and have fun!</h4>
                        </Jumbotron>
                    </div>
                    <div className="container">
                        <Row>
                            {items.map(item => (
                                
                                    <Col xs={12} sm={3}  key={item.id}>
                                        <Panel >
                                    <Panel.Body>
                                            <Col xs={8} sm={10} style={{alignContent: screenLeft}}>
                                            <p>{item.title.toUpperCase()}:</p>
                                            </Col>
                                            <Col xs={4} sm={2} >
                                            <Badge>{item.amount} </Badge>
                                            </Col>
                                        
                                            </Panel.Body>
                                </Panel>
                                    
                                    </Col>
                                    
                                // <li key={item.id}>
                                //     {item.id} {item.title} {item.amount} 
                                // </li>
                            ))}
                        </Row>
                    </div>
                </div>
            );
        }
    }


}



// const Dashboard = (props) => {
//     return (
//         <div>
//         </div>
//     )
// }

const CourseTable = (props) => {
    return (
        <div>
        </div>
    )
}

const StatItem = (props) => {
    return (
        <div>
        </div>
    )
}

export default Dashboard;