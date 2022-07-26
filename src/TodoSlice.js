import { createSlice } from "@reduxjs/toolkit";

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
    resetTodo: (state) => {
      state.items = [];
      localStorage.setItem("todo", JSON.stringify(state.items));
    },
  },
});

export const { setTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
