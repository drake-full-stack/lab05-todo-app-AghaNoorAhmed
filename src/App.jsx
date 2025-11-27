import { useState } from "react";
import "./App.css";

function App() {
  // ===== Use State Variables =====
  // Checkpoint 1: Converted tasks to objects
const [tasks, setTasks] = useState([
  { id: 1, text: "Project 1", completed: false },
  { id: 2, text: "Laundry", completed: false },
  { id: 3, text: "Walk Dogs", completed: false },
  { id: 4, text: "Clean room", completed: false },
]);
  const [inputValue, setInputValue] = useState("");

  // ===== Functions ======
const handleAddTask = (e) => {
  e.preventDefault();

  if (inputValue.trim()) {
    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  setInputValue("");
};
const handleDelete = (idToDelete) => {
  setTasks(tasks.filter((task) => task.id !== idToDelete));
};
const handleToggleComplete = (idToToggle) => {
  setTasks(
    tasks.map((task) =>
      task.id === idToToggle
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};


  // ==== JSX that gets returned =====
  return (
    <div className="container">
      <h1>My To Do List</h1>
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

<ul className="task-list">
  {tasks.map((task) => (
    <li key={task.id} className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleComplete(task.id)}
          className="task-checkbox"
        />
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </label>

      <button
        className="delete-button"
        onClick={() => handleDelete(task.id)}
      >
        🗑️
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;
