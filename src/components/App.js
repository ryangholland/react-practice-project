import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      tasks: []
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
  }

  updateInput(text) {
    this.setState({
      inputValue: text,
    });
  }

  updateTasks() {
    this.state.tasks.push(this.state.inputValue);
    this.updateInput("");
    console.log(this.state.tasks);
  }

  render() {
    return (
      <>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.updateInput(e.target.value)}
        ></input>
        <button onClick={this.updateTasks}>Submit</button>
      </>
    );
  }
}

export default App;
