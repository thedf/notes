import React, { Component } from "react";
// import "./App.css";

class note extends Component {
  handleToggleComplete = () => {
    this.props.onClick(this.props.note.id);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.note.id);
  };
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <li
          style={{
            textDecoration: this.props.note.completed ? "line-through" : "",
          }}
          onClick={this.handleToggleComplete}
        >
          {this.props.note.text}
        </li>
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}

export default note;
