import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }; 

  
  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <>

    <div className='App'>
      <div className="container">
        <h1>ToDo App</h1>
        <div>

    <input type="text" values={newTask} onChange={(event) => setNewTask(event.target.value)} />
    <button className='add' onClick={handleAdd}>Add Task</button>
        </div>

        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemove(index)}> X</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default App;
