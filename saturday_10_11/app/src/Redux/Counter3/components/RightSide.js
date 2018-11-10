import React from 'react'
import PropTypes from 'prop-types'

const RightSide = ({ onDecrement, actionIfOdd, actionAsync }) => {
  return (
      <div className="col-xs-4">
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={onDecrement}>
          - 1
        </button>
        <br/><br/>
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={() => actionIfOdd("decrement")}>
          - 1 if odd
        </button>
        <br/><br/>
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={() => actionAsync("decrement")}>
          - 1 async
        </button>
      </div>
  )
}

RightSide.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  actionIfOdd: PropTypes.func.isRequired,
  actionAsync: PropTypes.func.isRequired
}

export default RightSide;
