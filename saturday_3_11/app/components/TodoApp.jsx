import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoApp = ({ todos, toDoInput, updateInput, addToDo, toggleDone }) => (
  <div>
    <h2 className="is-size-4">My ToDos</h2>
    <h3 className="is-size-5">04: Re-written with Presentational and Container components</h3>
    <br/>
    <ul>
      {
        Boolean(todos.length) &&
          todos.map((todo) => <TodoItem key={todo.title} {...todo} toggleDone={toggleDone} />)
      }
    </ul>
    <form onSubmit={addToDo}>
      Add ToDo: <input value={toDoInput} onChange={updateInput} type="text" />
      <button type="submit">Add ToDo</button>
    </form>
  </div>
);

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  toDoInput: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
  addToDo: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

export default TodoApp;
