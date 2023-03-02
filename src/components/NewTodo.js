import React, { useState } from "react";

function NewTodo({ handleTodo }) {
  const [newTodo, setNewTodo] = useState("");

  // const update = (e) => {
  //   let temp = {};
  //   temp.text = e.target.value;
  //   temp.completed = false;
  //   setNewTodo(temp);
  // };

  return (
    <>
      <input
        type="text"
        name="newtodo"
        id=""
        autoComplete="off"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default NewTodo;
