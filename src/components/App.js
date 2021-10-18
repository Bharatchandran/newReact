import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor Called");
  }
  state = {
    Name: "Bharat",
    Salutation: "Hola",
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  render() {
    //DO NOT USE TIMER OR SETTING STATES UINSIDE RENDER FUNCTION
    if (false && this.state.Salutation !== "Hello")
      setTimeout(() => {
        // Do not Mutae the state RERENDER WILL NOT HAPPEN this.state.Name="Hello "\
        //Change the state after 5 seconds
        this.setState({
          Name: "Bharatchandran",
          Salutation: "Hello",
        });
      }, 5000);
    console.log("render Called!");
    return (
      <div className="App">
        {this.state.Salutation}
        {this.state.Name}
      </div>
    );
  }
}
export default App;
