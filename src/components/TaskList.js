import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, selected = "All"}) {
  return (
    <div className="tasks">
      {tasks.filter(task => selected === "All" ? true : task.category === selected)
            .map(task => (
              <Task key={uuid()} text={task.text} category={task.category} />
            ))} 
    </div>
  );
}

export default TaskList