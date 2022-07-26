import React from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { setTodo, resetTodo } from "./TodoSlice";
import "./css/App.css";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.items);
  return (
    <div className="app-container">
      <div className="header">
        <div className="title">Todo List</div>
        <div className="count">{items.length}</div>
      </div>

      <input
        type="text"
        className="task-input"
        placeholder="Type task...  (Enter / Return)"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value !== "") {
              dispatch(setTodo(e.target.value));
            } else {
              alert("Task can't be empty");
            }
            e.target.value = "";
          }
        }}
      ></input>
      <button className="reset-btn" onClick={() => dispatch(resetTodo())}>
        reset
      </button>
      <ItemList items={items} />
    </div>
  );
};

export default App;
