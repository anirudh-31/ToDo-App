import React, { Component } from "react";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";
import "./ToDoList.css";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editExistingToDo = this.editExistingToDo.bind(this);
  }
  addNewTask(task) {
    let newTask = [...this.state.todos, task];
    this.setState({
      todos: newTask,
    });
  }
  deleteTask(id) {
    let newTasks = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTasks,
    });
  }
  editExistingToDo(task) {
    let oldToDos = [...this.state.todos];
    for (let i = 0; i < oldToDos.length; i++) {
      if (oldToDos[i].id === task.id) {
        oldToDos[i].task = task.task;
      }
    }
    this.setState({
      todos: oldToDos,
    });
  }
  render() {
    return (
      <div className="ToDoList">
        <div className="ToDoList__Title">
          <h1>ToDo List</h1>
          <p>A simple React ToDo app</p>
        </div>
        <div className="ToDoList__list">
          {this.state.todos.map((todo) => (
            <ToDo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              delete={this.deleteTask}
              edit={this.editExistingToDo}
            />
          ))}
        </div>
        <div className="ToDoList__form">
          <AddToDo add={this.addNewTask} />
        </div>
      </div>
    );
  }
}
