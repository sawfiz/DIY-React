import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Individual.css';

export default class Individual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'display',
    };
  }

  handleEdit = (e) => {
    console.log('edit');
  };

  handleDelete = () => {
    this.props.onDelete(this.props.task.number);
  };

  render() {
    const { task } = this.props;

    let output = (
      <li>
        {task.number} {task.text}
        <button className="button">
          <i className="fa-regular fa-pen-to-square" onClick={this.handleEdit}></i>
        </button>
        <button className="button">
          <i className="fa-regular fa-trash-can" onClick={this.handleDelete}></i>
        </button>
      </li>
    );

    return output;
  }
}
