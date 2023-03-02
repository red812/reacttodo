import React, { useState } from "react";

function NewTodo({ handleTodo }) {
  const [newTodo, setNewTodo] = useState([]);

  //   const updateTodo = (e) => {};

  return (
    <>
      <input
        type="text"
        name="newtodo"
        id=""
        autoComplete="no"
        onBlur={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn" type="submit" onClick={() => handleTodo(newTodo)}>
        Add
      </button>
    </>

}

export default NewTodo;
