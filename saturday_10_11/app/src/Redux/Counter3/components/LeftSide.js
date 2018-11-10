import React from 'react'
import PropTypes from 'prop-types'

const LeftSide = ({ onIncrement, actionIfOdd, actionAsync }) => {
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
     </div>
  )
}

LeftSide.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  actionIfOdd: PropTypes.func.isRequired,
  actionAsync: PropTypes.func.isRequired
}

export default LeftSide;
