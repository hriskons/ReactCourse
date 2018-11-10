import React from 'react'
import PropTypes from 'prop-types'

const LeftSide = ({ onIncrement, actionIfOdd, actionAsync, onMultiply }) => {
  return (
      <div className="col-xs-4">
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={onIncrement}>
          + 1
        </button>
        <br/><br/>
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={() => actionIfOdd("increment")}>
          + 1 if odd
        </button>
        <br/><br/>
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={() => actionAsync("increment")}>
          + 1 async
        </button>
        <br/><br/>
        <button
          type="submit"
          className="btn btn-info btn-lg"
          onClick={onMultiply}>
          * 2
        </button>
     </div>
  )
}

LeftSide.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  actionIfOdd: PropTypes.func.isRequired,
  actionAsync: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired
}

export default LeftSide;
