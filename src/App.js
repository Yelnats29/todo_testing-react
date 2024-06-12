import {useState} from 'react';
import './App.css';

const App = () => {
const [todos, setTodos] = useState([]);
const [newTask, setNewTask] = useState('');

// Creating a new task for the Todo List
const addTask = () => {
  if (newTask.trim() !== '') {
    setTodos([...todos, {text: newTask, completed: false }]);
    setNewTask('');
  } 
};

// Cross out tasks on List when clicked
const showTasks = (index) => {
const updatedTasks = todos.map((todo, i) => (
  i === index ? {...todo, completed: !todo.completed } : todo
));
setTodos(updatedTasks);
};


// Remove Task from List
const deleteTask = (index) => {
setTodos(todos.filter((_, i) => i !== index));
};



	return <>
		<h1>Get It Done!</h1>
    <input 
    type= 'text'
    placeholder='Enter Task Here'
    value={newTask}
    onChange={(event) => setNewTask(event.target.value)} />
  <button onClick={addTask}>+</button>
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {/* Cross out task code */}
        <span onClick={() => showTasks(index)}
        className = {todo.completed ? 'completed' : ''}>
          {/* Display entered task code */}
          {todo.text}
        </span>
        
        <button onClick={() => deleteTask(index)}>Delete Task</button>
      </li>
    ))}
  </ul>
	</>
}

export default App;