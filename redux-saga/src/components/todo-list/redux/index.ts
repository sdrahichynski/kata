import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: [] as Todo[],
  reducers: {
    set: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    create: (state, action: PayloadAction<string>) => {
      return [
        ...state,
        {
          id: state.length,
          title: action.payload,
          done: false,
        } as Todo,
      ];
    },
    update: (
      state,
      action: PayloadAction<Partial<Todo> & { id: Todo["id"] }>
    ) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              ...action.payload,
            }
          : todo
      );
    },
    remove: (state, action: PayloadAction<Todo["id"]>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, create, update, remove } = todoSlice.actions;

export default todoSlice.reducer;
