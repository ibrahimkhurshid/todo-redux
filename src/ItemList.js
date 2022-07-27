import React, { useEffect, useState } from "react";
import "./css/ItemList.css";
import EmptyList from "./EmptyList";
import { removeSelectedTodos } from "./TodoSlice";
import { useDispatch } from "react-redux";

const rm = (arr, val) => {
  const temp = Array.from(arr);
  const index = temp.indexOf(val);
  if (index > -1) {
    temp.splice(index, 1);
  }
  return temp;
};

const ItemList = ({ items, callback, toRemove }) => {
  const [checkedTodos, setCheckedTodos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    callback.current = () => setCheckedTodos([]);
  }, []);

  const itemsList = items.map((item, id) => (
    <li key={`${id}-${item}`} data-id={id}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={(e) => {
          const id = parseInt(e.target.closest("li").dataset["id"]);
          e.target.checked
            ? setCheckedTodos([...checkedTodos, id])
            : setCheckedTodos(rm(checkedTodos, id));
        }}
      ></input>
      {item}
    </li>
  ));

  useEffect(() => {
    toRemove.current = checkedTodos;
    console.log(toRemove.current);
  }, [checkedTodos]);

  return items.length >= 1 ? (
    <div>
      {console.log(checkedTodos)}
      {checkedTodos.length >= 1 ? (
        <div>
          <div>{checkedTodos.length} Selected</div>
          <button
            onClick={() => {
              dispatch(removeSelectedTodos(checkedTodos));
              setCheckedTodos([]);
            }}
          >
            Remove '{checkedTodos.length}' Selected
          </button>
        </div>
      ) : null}
      <ul className="items-list">{itemsList}</ul>
    </div>
  ) : (
    <EmptyList />
  );
};

export default ItemList;
