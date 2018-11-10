import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const mapStateToProps = state => {
  return {value: state};
};

class Counter extends Component {
  actionIfOdd = (action) => {
    if (this.props.value % 2 !== 0) {
      action === 'increment' ? 
        this.props.onIncrement() : this.props.onDecrement()
    }
  }

  actionAsync = (action) => {
    setTimeout(action === 'increment' ? 
      this.props.onIncrement : this.props.onDecrement, 5000);
  }

  onMultiply = () => {
    this.props.onMultiply();
  }

  onDivision = () => {
    this.props.onDivision();
  }

  render() {
    const { onIncrement, onDecrement, value } = this.props;
    return (
      <div className="text-center">
        <LeftSide
          onIncrement={onIncrement}
          actionIfOdd={this.actionIfOdd}
          actionAsync={this.actionAsync}
          onMultiply = {this.onMultiply}
        />
        <div className="col-xs-4">
          <div style={{fontSize: "120px"}}>{value}</div>
        </div>
        <RightSide
          onDecrement={onDecrement}
          actionIfOdd={this.actionIfOdd}
          actionAsync={this.actionAsync}
          onDivision={this.onDivision}
        />
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onDivision: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Counter);
