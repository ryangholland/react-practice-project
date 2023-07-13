import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks, completed } = this.props;

    return (
      <>
        <h2>Tasks In Progress</h2>
        {tasks.length === 0 && <h4>There's nothing here!</h4>}
        {tasks.map((task) => {
          if (task.editMode) {
            return (
              <div key={task.id} className="task-div">
                <form
                  className="edit-form"
                  id={task.id}
                  onSubmit={this.props.saveEdit}
                >
                  <input id={task.id} defaultValue={task.text}></input>
                  <button type="submit">Save Changes</button>
                </form>
              </div>
            );
          } else {
            return (
              <div key={task.id} className="task-div">
                <h3>{task.text}</h3>
                <div className="task-buttons-div">
                  <button id={task.id} onClick={this.props.changeEditMode}>
                    Edit
                  </button>
                  <button id={task.id} onClick={this.props.completeTask}>
                    Complete
                  </button>
                  <button id={task.id} onClick={this.props.deleteTask}>
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        })}
        <hr />
        <h2>Completed Tasks</h2>
        {completed.length === 0 && <h4>There's nothing here!</h4>}
        {completed.map((task) => {
          return (
            <div key={task.id} className="task-div">
              <h3>{task.text}</h3>
              <div className="task-buttons-div">
                <button id={task.id} onClick={this.props.deleteTask}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Overview;
