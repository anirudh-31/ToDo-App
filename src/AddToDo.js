import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./AddToDo.css";
import Add from "./plus.svg";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      task: "New Task",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({
      id: uuid(),
      task: "New Task",
    });
  }
  render() {
    return (
      <div className="AddToDo">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add task</label>
          <div className="form__lower">
            <input
              type="text"
              value={this.state.task}
              name="task"
              id="task"
              onChange={this.handleChange}
            />
            <button>Add task</button>
          </div>
        </form>
      </div>
    );
  }
}
