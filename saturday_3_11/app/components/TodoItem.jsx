import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ id, title, completed, toggleDone }) => (
  <li>
    <input type="checkbox" checked={completed} onChange={() => toggleDone(id)} />&nbsp;
    { completed ? <strike>{title}</strike> : <span>{title}</span> }
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleDone: PropTypes.func.isRequired
};

export default TodoItem;
