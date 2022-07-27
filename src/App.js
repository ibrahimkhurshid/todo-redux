import React from "react";
import { useRef } from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { setTodo, resetTodo } from "./TodoSlice";
import "./css/App.css";

const App = () => {
  const dispatch = useDispatch();
  const resetChildFunc = useRef();
  const toRemoveTodos = useRef([]);
  const items = useSelector((state) => state.todo.items);
  return (
    <div className="app-container">
      {console.log("render&items", items)}
      <div className="header">
        <div className="title">Todo List</div>
        <div className="count">{items.length}</div>
      </div>

      <input
        type="text"
        className="task-input"
        placeholder="task...  hit Enter|Return"
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
      <button
        className="reset-btn"
        onClick={() => {
          dispatch(resetTodo());
          resetChildFunc.current();
        }}
      >
        reset
      </button>
      <ItemList
        items={items}
        callback={resetChildFunc}
        toRemove={toRemoveTodos}
      />
    </div>
  );
};

export default App;
