import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Make task an object
      // Add uniqid
      task: { text: '', id: uniqid(), number: 0 },
      tasks: [],
      count: 0,
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      // How to setState for an object property in state
      // Make sure to include all properties
      task: {
        text: event.target.value,
        id: this.state.task.id,
        number: this.state.task.number,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let tempCount = this.state.count;
    tempCount++;

    this.setState(
      {
        // Update the task number
        task: {
          text: this.state.task.text,
          id: this.state.task.id,
          number: tempCount,
        },
        count: tempCount,
      },
      () =>
        this.setState({
          // Reset the task state
          task: { text: '', id: uniqid(), number: 0 },
          // Use concat to create a new copy of the array with new elment added
          tasks: this.state.tasks.concat(this.state.task),
        })
    );
  };

  handleDelete = (number) => {
    // A copy of this.state.tasks with a specific task removed
    const tempTasks = this.state.tasks.filter(
      (task) => task.number !== Number(number)
    );

    this.setState({
      tasks: tempTasks,
    });
  };

  render() {
    // Destructuring the state to make code simpler
    const { task, tasks } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Enter task</label>
          <input
            type="text"
            value={task.text}
            onChange={this.handleTaskChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Overview tasks={tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
