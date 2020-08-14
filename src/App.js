import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Arrow from "./components/Arrow";
import ListElement from "./components/ListElement";
import Checkbox from "./components/Checkbox";
import ExitButton from "./components/ExitButton";

function App(props) {
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => {
    let itemClassName = "";
    if (!task.completed) {
      itemClassName = "list-textbox";
    } else {
      itemClassName = "list-textbox scratched-list-item";
    }
    return (
      <ListElement
        left={
          <Checkbox
            id={task.id}
            checked={task.completed}
            onChange={() => toggleTaskCompleted(task.id)}
          />
        }
        right={
          <label className={itemClassName} htmlFor={task.id}>
            {task.name}
          </label>
        }
        removeButton={<ExitButton onClick={() => deleteTask(task.id)} />}
      />
    );
  });

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "items" : "item";
  const cornerText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-app">
      <h1 id="todo-title">todos</h1>
      <div className="todo-test">
        <div className="todo-box">
          <ListElement
            left={<Arrow />}
            right={<Form addTask={addTask} />}
          />
          <div className="todo-app-tasklist">
            <li
              role="list"
              className="todo-list"
              aria-labelledby="list-heading"
            >{taskList}
            </li>
          </div>
          <div className="todo-bottom">
            <div className="todo-corner-text">
              <h2 id="list-heading" tabIndex="-1">
                {cornerText}
              </h2>
            </div>
            <div className="todo-buttons-filters"> {filterList}</div>
          </div>
        </div>
        <div className="todo-bottom background-bottom1"></div>
        <div className="todo-bottom background-bottom2"></div>
      </div>
    </div>
  );
}

export default App;
