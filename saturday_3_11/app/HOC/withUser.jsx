import React, {Component} from "react"
const withUser = (Card) => {
    class withUserComponent extends Component {
        state = {
            data: []
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

        render() {
            return <Card {...this.state} {...this.props} />
        }
    }

    return withUserComponent;
}

export default withUser;