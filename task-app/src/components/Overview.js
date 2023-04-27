import React, { Component } from 'react';

export class Overview extends Component {

  render() {
    const tasks = this.props.tasks;
    const tasksEl = tasks.map((task, index) => <div key={index}>{index} {task} </div>);
    return (
      <div>
        Overview
        {tasksEl}
      </div>
    );
  }
}

export default Overview;
