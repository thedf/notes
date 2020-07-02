import React, { Component } from "react";
// import "./App.css";
import AddNote from "./AddNote";
import NoteElt from "./note";

class Notes extends Component {
  state = {
    notes: [],
  };

  handleAddNote = (note) => {
    this.setState({
      notes: [note, ...this.state.notes],
    });
  };
  handleToggleComplete = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        return {
          ...note,
          completed: note.id === id ? !note.completed : note.completed,
        };
      }),
    });
  };

  handleDeleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h2>Memos'</h2>
        <AddNote onSubmit={this.handleAddNote}></AddNote>
        <ul>
          {this.state.notes.map((note) => {
            return (
              <NoteElt
                key={note.id}
                note={note}
                onClick={this.handleToggleComplete}
                onDelete={this.handleDeleteNote}
              ></NoteElt>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Notes;
