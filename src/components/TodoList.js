import React, { useState } from "react";

import NewTodo from "./NewTodo";

function TodoList() {
  const [todos, setTodos] = useState([{ completed: false, text: "hello" }]);

  const handlenewtodo = (newtodo) => {
    setTodos(newtodo);
  };

  const handlechecked = () => {};

  //   const todolist = todos.map((todo) => console.log(todo));

  return (
    <div className="container">
      <div className="app-header"></div>
      <div className="app-body">
        <ul>
          {todos?.map((ele) => (
            <li key={ele.text}>
              <div className="todo-item">
                <div>
                  <input
                    type="checkbox"
                    value={ele.completed}
                    name=""
                    id="check"
                    onChange={handlechecked}
                  />
                  <label htmlFor="">{ele.text}</label>
                </div>
                <button className="btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="app-form">
        <NewTodo handleTodo={handlenewtodo} />
      </div>
    </div>
  );
}

export default TodoList;
