import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selected, setSelected] = useState("All");
  function handleSelect(newCategory) { 
    setSelected(newCategory);
  }

  const [tasks, setTasks] = useState(TASKS)

  function onTaskFormSubmit(task){
    setTasks([...tasks,task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelect={handleSelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} selected={selected}/>
    </div>
  );
}

export default App;
