import React, { useState } from "react";

import NewTodo from "./NewTodo";

function TodoList() {
  const [todos, setTodos] = useState([{ completed: false, text: "hello" }]);

  const handlenewtodo = (newtodo) => {
    // newtodo.completed = false;
    console.log(newtodo);
    setTodos((todos) => [...todos, { completed: false, text: newtodo }]);
    console.log(todos);
  };

  const handlechecked = (e, ele) => {
    // console.log(e.target.checked, ele);
    const updatedtos = todos.map((todo) =>
      todo.text === ele.text ? { ...todo, completed: e.target.checked } : todo
    );
    setTodos(updatedtos);
    // console.log(todos);
  };

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
                    checked={ele.completed}
                    name=""
                    id="check"
                    onChange={(e) => handlechecked(e, ele)}
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
