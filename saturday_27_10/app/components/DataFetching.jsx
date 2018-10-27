import React from 'react';

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';

class DataFetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
 }

  componentDidMount() {
    fetch(contactsAPI)
    .then(function(response) {
      return response.json();
    })
    .then((myJson)  => {
      this.setState({
        isLoaded: true,
        items: myJson.contacts
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
        <ul className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
            Contacts
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.surname}
            </li>
          ))}
        </ul>
      );
    }
 }
}

export default DataFetching;