import React from "react";

function ListElement(props) {
  return (
    <div className="todo-app-form">
      <div className="todo-app-list-item">{props.left}</div>
      {props.right}
      <div className="todo-app-remove-button">{props.removeButton}</div>
    </div>
  );
}

export default ListElement;
