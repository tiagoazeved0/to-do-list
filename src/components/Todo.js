import React from "react";
import Checkbox from "./Checkbox.js";

function Todo(props) {
  const viewTemplate = (
    <div>
      <div>
        <label>
          <Checkbox
            id={props.id}
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
        </label>
      </div>
    </div>
  );

  return <li className="todo">{viewTemplate}</li>;
}

export default Todo;
