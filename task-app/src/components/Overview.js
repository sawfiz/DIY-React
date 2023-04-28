import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Overview.css';

// Use function component instead of class component
function Overview(props) {
  // Remove `this`
  const tasks = props.tasks;

  const handleClick = (e) => {
    props.onDelete(e.target.parentNode.parentNode.dataset.number)
  }

  // prettier-ignore
  const tasksEl = tasks.map((task) => 
    <li key={task.id} data-number={task.number}>
    {task.number} {task.text} 
      <button className='button' onClick={handleClick}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );

  return (
    <div>
      {/* Use ul instead of div */}
      <ul>{tasksEl}</ul>
    </div>
  );
}

export default Overview;
