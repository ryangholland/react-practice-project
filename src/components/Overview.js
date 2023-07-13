import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="task-div">
              <h3>{task.text}</h3>
              <div className="task-buttons-div">
                <button>Edit</button>
                <button>Complete</button>
                <button id={task.id} onClick={this.props.deleteTask}>Delete</button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Overview;
