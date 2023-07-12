import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    const listItems = tasks.map((task) => {
      return <li key={task.id}>{task.text}</li>;
    });

    return <ul>{listItems}</ul>;
  }
}

export default Overview;
