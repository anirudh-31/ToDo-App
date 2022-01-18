import React, { Component } from "react";
import "./ToDo.css";
import Edit from "./pencil.svg";
import Delete from "./trash.svg";
import EditToDo from "./EditToDo";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
      toEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.editToDo = this.editToDo.bind(this);
  }
  handleToggle() {
    let toToggle = this.state.isToggled;
    this.setState({
      isToggled: !toToggle,
    });
  }
  handleEdit() {
    this.setState({
      toEdit: true,
    });
  }
  editToDo(task) {
    this.setState({
      toEdit: false,
    });
    this.props.edit(task);
  }
  handleDelete() {
    this.props.delete(this.props.id);
  }
  render() {
    if (this.state.toEdit) {
      return (
        <div className="ToDo">
          <EditToDo
            task={this.props.task}
            id={this.props.id}
            edit={this.editToDo}
          />
        </div>
      );
    } else {
      return (
        <div className="ToDo">
          <h1
            className="ToDo__task"
            onClick={this.handleToggle}
            style={{
              textDecoration: this.state.isToggled && "line-through",
              opacity: this.state.isToggled && "0.5",
            }}
          >
            {this.props.task}
          </h1>
          <div className="ToDo__toggles">
            <button onClick={this.handleEdit}>
              <img src={Edit} alt="edit" />
            </button>
            <button onClick={this.handleDelete}>
              <img src={Delete} alt="Delete" />
            </button>
          </div>
        </div>
      );
    }
  }
}
