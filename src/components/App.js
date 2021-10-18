import React, { Component } from "react";


let
class App extends Component {
  constructor() {
    super();
    console.log("Constructor Called");
  }
  state = {
    Name: "Bharat",
    Salutation: "Hola",
    Timer: 1,
  };

  componentDidMount() {
    setInterval(() => {
      //Change the state after 5 seconds
      this.setState({
        Timer: this.state.Timer + 1,
      });
    }, 5000);
    console.log("componentDidMount called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  render() {
    //DO NOT USE TIMER OR SETTING STATES UINSIDE RENDER FUNCTION
    if (false && this.state.Salutation !== "Hello")
      console.log("render Called!");
    return (
      <div className="App">
        <p>
          {this.state.Salutation}
          {this.state.Name}
        </p>
        <p>Timer: {this.state.Timer}</p>
      </div>
    );
  }
}
export default App;
