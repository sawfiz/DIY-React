import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Use function component instead of class component
function Overview(props) {
  // Remove `this`
  const tasks = props.tasks;
  const tasksEl = tasks.map((task) => <li key={task.id}>{task.number} {task.text} <button class='button'><i class="fa-regular fa-trash-can"></i></button></li>);

  return (
    <div>
      {/* Use ul instead of div */}
      <ul>
      {tasksEl}
      </ul>
    </div>
  );
}


export default Overview;
