import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addAction } from "../actions";
import { INCREMENT, DECREMENT } from "../constants/action-types";

const mapDispatchToProps = dispatch => {
  return {
    addAction: type => dispatch(addAction(type))
  };
};

class App extends Component {
  render() {
    return (
      <Counter
       onIncrement={() => this.props.addAction(INCREMENT)}
       onDecrement={() => this.props.addAction(DECREMENT)}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
