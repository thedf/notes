import React, { Component } from "react";
import "./App.css";
import Notes from "./notes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Notes></Notes>
        </header>
      </div>
    );
  }
}

export default App;
