import React, { Component } from "react";
import "./EditToDo.css";

export default class EditToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      task: this.props.task,
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
    this.props.edit(this.state);
  }
  render() {
    return (
      <div className="EditToDo">
        <form onSubmit={this.handleSubmit}>
          <div className="EditToDo__form">
            <label htmlFor="edit task">Edit Task</label>
            <input
              onChange={this.handleChange}
              id="edit task"
              type="text"
              value={this.state.task}
              name="task"
            />
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}
