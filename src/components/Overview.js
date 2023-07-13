import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

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
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Overview;
