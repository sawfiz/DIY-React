import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Individual from './Individual';
import './Overview.css';

// Use function component instead of class component
function Overview(props) {
  // Remove `this`
  const tasks = props.tasks;

  // prettier-ignore
  const tasksEl = tasks.map((task) => 
    <Individual key={task.id} task={task} onDelete={props.onDelete}/>
  );

  return (
    <div>
      {/* Use ul instead of div */}
      <ul>{tasksEl}</ul>
    </div>
  );
}

export default Overview;
