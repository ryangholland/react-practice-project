import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      tasks: [],
    };
  }

  updateInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  updateTasks = (e) => {
    e.preventDefault();

    const newTask = {
      text: this.state.inputValue,
      id: uniqid(),
    };

    this.setState({
      inputValue: "",
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    const { inputValue, tasks } = this.state;

    return (
      <>
        <form onSubmit={this.updateTasks}>
          <label htmlFor="taskInput">Enter task:</label>
          <input
            value={inputValue}
            onChange={this.updateInput}
            type="text"
            id="taskInput"
          ></input>
          <button type="submit">Add Task</button>
          <Overview tasks={tasks} />
        </form>
      </>
    );
  }
}

export default App;
