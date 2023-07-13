import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";
import "../style.css";

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
        <h1>ReacToDo</h1>
        <form onSubmit={this.updateTasks}>
          <label htmlFor="taskInput">Enter task:</label>
          <input
            value={inputValue}
            onChange={this.updateInput}
            type="text"
            id="taskInput"
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <hr />
        <h2>Tasks In Progress</h2>
        <Overview tasks={tasks} />
        <hr />
        <h2>Completed Tasks</h2>
      </>
    );
  }
}

export default App;
