import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Individual.css';

export default class Individual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'display',
      text: '',
    };
  }

  // When edit button is click, change to edit mode, show the task text
  handleEdit = (e) => {
    console.log('edit');
    this.setState({ mode: 'edit', text: this.props.task.text });
  };

  // When input is changed, show changed text
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ mode: 'edit', text: e.target.value });
  };

  // When submit is clicked, call onEdit of parent component
  // Change mode to display
  handleSubmit = () => {
    this.props.onEdit(this.props.task.number, this.state.text);
    this.setState({ mode: 'display', text: this.props.task.text });
  };

  // When delete is called, call onDelete of parent component
  handleDelete = () => {
    this.props.onDelete(this.props.task.number);
  };

  render() {
    const { task } = this.props;
    let output;

    if (this.state.mode === 'display') {
      output = (
        <li className="display">
          <div>{task.number} </div>
          {task.text}
          <button className="button">
            <i
              className="fa-regular fa-pen-to-square"
              onClick={this.handleEdit}
            ></i>
          </button>
          <button className="button">
            <i
              className="fa-regular fa-trash-can"
              onClick={this.handleDelete}
            ></i>
          </button>
        </li>
      );
    } else if (this.state.mode === 'edit') {
      output = (
        <li className="edit">
          <div>{task.number} </div>
          <input value={this.state.text} onChange={this.handleChange}></input>
          <button className="button">
            <i className="fa-solid fa-check" onClick={this.handleSubmit}></i>
          </button>
        </li>
      );
    }

    return output;
  }
}
