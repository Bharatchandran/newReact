import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Navbar dark={true}>React Application </Navbar>
        <Navbar dark={false}>Awesome App </Navbar>
        <Navbar dark={true}>React Application </Navbar>
      </div>
    );
  }
}
export default App;
