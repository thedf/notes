import React, { Component } from "react";
import shortid from "shortid";
// import "./App.css";

class AddNote extends Component {
  state = {
    note: "",
  };

  handleTextChange = (event) => {
    this.setState({
      note: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.note,
      completed: false,
    });
    this.setState({
      note: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="note"
          onChange={this.handleTextChange}
          value={this.state.note}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddNote;
