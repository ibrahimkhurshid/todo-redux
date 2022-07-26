import React from "react";
import "./css/ItemList.css";

const ItemList = ({ items }) => {
  const itemsList = items.map((item, id) => (
    <li key={id}>
      <input className="checkbox" type="checkbox"></input>
      {item}
    </li>
  ));
  return items.length >= 1 ? (
    <ul className="items-list">{itemsList}</ul>
  ) : (
    <ul>
      <li>List empty</li>
    </ul>
  );
};

export default ItemList;
