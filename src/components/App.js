import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";

class App extends Component {
  state = {
    Dark: false,
  };

  render() {
    return (
      <div className="App">
        <Navbar dark={this.state.Dark}>React Application </Navbar>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ Dark: !this.state.Dark });
          }}
        >
          Switch
        </button>
      </div>
    );
  }
}
export default App;
