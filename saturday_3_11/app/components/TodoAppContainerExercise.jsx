import React, { Component } from "react";
import TodoApp from "./TodoApp";

class TodoAppContainer extends Component {
  state = {
    toDoInput: "",
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => this.setState({ todos: todos.slice(0, 5) }));
  }

  toggleDone = (id) => {
    const newTodos = [...this.state.todos];
    newTodos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        return todo;
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  }

  updateInput = (event) => {
    this.setState({ toDoInput: event.target.value });
  }

  addToDo = (e) => {
    e.preventDefault();
    const lastItemId = this.state.todos.length - 1;
    const newToDo = {
      id: this.state.todos[lastItemId].id + 1,
      title: this.state.toDoInput,
      completed: false
    };
    const newTodos = [...this.state.todos, newToDo];

    this.setState({ todos: newTodos, toDoInput: "" });
  }

  render() {
    const { todos, toDoInput } = this.state;

    return (
      <TodoApp
        todos={todos}
        toDoInput={toDoInput}
        updateInput={this.updateInput}
        addToDo={this.addToDo}
        toggleDone={this.toggleDone}
      />
    );
  }
}

export default TodoAppContainer;
