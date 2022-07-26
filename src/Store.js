import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
