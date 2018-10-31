import React from "react";

const coursesAPI = 'http://localhost:3000/courses';

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
                        {items.map(item => (
                            <li key={item.id}>
                                {item.id} {item.title} <img src = {item.imagePath} />
                            </li>
                        ))}
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