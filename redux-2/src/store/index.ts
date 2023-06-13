import { configureStore } from "@reduxjs/toolkit";
import { TodosReducer } from "components/todo-list";

const store = configureStore({
  reducer: {
    todoList: TodosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
