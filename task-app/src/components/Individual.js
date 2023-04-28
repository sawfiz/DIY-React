import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Individual.css';

export default function Individual(props) {
  const { task } = props;

  const handleClick = (e) => {
    // props.onDelete(e.target.parentNode.parentNode.dataset.number)
    props.onDelete(task.number);
  };

  return (
    <li data-number={task.number}>
      {task.number} {task.text}
      <button className="button">
        <i className="fa-regular fa-trash-can" onClick={handleClick}></i>
      </button>
    </li>
  );
}
