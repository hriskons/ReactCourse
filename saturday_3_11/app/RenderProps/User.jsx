import {Component } from "react"

class User extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        if (!localStorage.getItem("user")) {
          fetch("https://api.myjson.com/bins/nkbdu")
            .then((res) => res.json())
            .then((user) => {
              localStorage.setItem("user", JSON.stringify(user));
              this.setState({ user });
            });
        } else {
          this.setState({ user: JSON.parse(localStorage.getItem("user")) });
        }
      }

    render(){
        return this.props.children(this.state.user);
    }
}

export default User;