import React from 'react'

// Use function component instead of class component
function Overview(props) {
  // Remove `this`
  const tasks = props.tasks;
  const tasksEl = tasks.map((task) => <li key={task.id}>{task.id} {task.text} </li>);

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
