import React from 'react'
import { useState } from 'react';
import './index.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState('');

function addTask() {
    if (newTask !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
}
function handleInputChange(e) {
    setNewTask(e.target.value);
}
function moveTaskUp(index) {
 if (index > 0) {
        const newTasks = [...tasks];
        const [removed] = newTasks.splice(index, 1);
        newTasks.splice(index - 1, 0, removed);
        setTasks(newTasks);
    }
}
function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const newTasks = [...tasks];
        const [removed] = newTasks.splice(index, 1);
        newTasks.splice(index + 1, 0, removed);
        setTasks(newTasks);
    }
}


  return (
    <div className="todo-list" >
        <h1 >To Do List</h1>
        <div>
            <input type="text" placeholder="New Task" value={newTask} onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>Add Task</button> 
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text' >{task}</span>
                    <button className='remove-button' onClick={() => setTasks(tasks.filter((_, i) => i !== index))}  >Delete</button>
                    <button className='up-button' onClick={() => moveTaskUp(index)}>Up</button>
                    <button className='down-button' onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            ))}
        </ol>

    </div>
  )
}

export default ToDoList