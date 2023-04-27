import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: [],
      task: '',
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      task: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const tempArray = this.state.taskArray;
    tempArray.push(this.state.task)
    this.setState({
      taskArray: tempArray,
      task: ''
    })
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Task</label>
          <input type="text" value={this.state.task} onChange={this.handleTaskChange}></input>
          <button>Submit</button>
        </form>
        <Overview tasks={this.state.taskArray}/>
      </div>
    );
  }
}

export default App;
