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
      completed: [],
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
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
      editMode: false,
    };

    this.setState({
      inputValue: "",
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (e) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== e.target.id);
    const newCompleted = this.state.completed.filter(
      (task) => task.id !== e.target.id
    );
    this.setState({
      tasks: newTasks,
      completed: newCompleted,
    });
  };

  completeTask = (e) => {
    const completedTask = this.state.tasks.find(
      (task) => task.id === e.target.id
    );
    const newTasks = this.state.tasks.filter((task) => task.id !== e.target.id);
    this.setState({
      tasks: newTasks,
      completed: [...this.state.completed, completedTask],
    });
  };

  changeEditMode = (e) => {
    const newTasks = [...this.state.tasks];
    newTasks.forEach((task) => {
      if (task.id === e.target.id) task.editMode = !task.editMode;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  saveEdit = (e) => {
    e.preventDefault();
    console.log(e.target.id); // Task ID that needs changed
    console.log(e.target.firstChild.value); // The new value

    const newTasks = this.state.tasks.filter((task) => task.id !== e.target.id);
    const updatedTask = this.state.tasks.find(
      (task) => task.id === e.target.id
    );
    console.log(this.state.tasks.indexOf(updatedTask)) // Task should be spliced in to this index to maintain position
    updatedTask.text = e.target.firstChild.value;
    updatedTask.editMode = false;
    newTasks.splice(this.state.tasks.indexOf(updatedTask), 0, updatedTask)

    this.setState({
      tasks: [...newTasks]
    })
  };

  render() {
    const { inputValue, tasks, completed } = this.state;

    return (
      <>
        <h1>ReacToDo</h1>
        <form className="enter-task-form" onSubmit={this.updateTasks}>
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

        <Overview
          tasks={tasks}
          completed={completed}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          changeEditMode={this.changeEditMode}
          saveEdit={this.saveEdit}
        />
      </>
    );
  }
}

export default App;
