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

    this.deleteTask = this.deleteTask.bind(this);
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

  deleteTask = (e) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== e.target.id);
    this.setState({
      tasks: newTasks,
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
        {tasks.length === 0 && <h4>There's nothing here!</h4>}
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
        <hr />
        <h2>Completed Tasks</h2>
        <h4>There's nothing here!</h4>
      </>
    );
  }
}

export default App;
