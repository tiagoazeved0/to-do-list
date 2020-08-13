import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="list-textbox"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

export default Form;
