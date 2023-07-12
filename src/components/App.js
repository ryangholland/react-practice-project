import React, { Component } from "react";
import Overview from "./Overview";

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
    const newTask = {};
    newTask.text = this.state.inputValue;
    newTask.id = Math.random();
    this.state.tasks.push(newTask);
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
        <Overview tasks={this.state.tasks} />
      </>
    );
  }
}

export default App;
