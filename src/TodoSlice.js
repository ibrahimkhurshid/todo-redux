import { createSlice } from "@reduxjs/toolkit";

const removeIndicedElements = (arr, indices) => {
  // indices.map((i) => (arr[i] = null));
  // arr.map((_, i) => (arr[i] == null ? arr.splice(i, 1) : undefined));
};

const rmi = (arr, indices) =>
  arr.filter(function (value, index) {
    return indices.indexOf(index) == -1;
  });

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items:
      localStorage.getItem("todo") === null
        ? []
        : JSON.parse(localStorage.getItem("todo")),
  },
  reducers: {
    setTodo: (state, e) => {
      state.items = [...state.items, e.payload];
      localStorage.setItem("todo", JSON.stringify(state.items));
    },
    removeSelectedTodos: (state, e) => {
      const indices = e.payload;
      const arr = [...state.items];
      console.log("before remov:", arr);
      console.log("indices", indices);
      const newArr = rmi(arr, indices);
      console.log("after remov:", newArr);

      state.items = newArr;
      localStorage.setItem("todo", JSON.stringify(newArr));
    },
    resetTodo: (state) => {
      state.items = [];
      localStorage.setItem("todo", JSON.stringify(state.items));
    },
  },
});

export const { setTodo, resetTodo, removeSelectedTodos } = todoSlice.actions;
export default todoSlice.reducer;
