import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "../types";
import * as API from "api";

interface TodoState {
  todos: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

export const todoSlice = createSlice({
  name: "todoList",

  initialState: {
    todos: [],
    status: "idle",
    error: null,
  } as TodoState,

  reducers: {
    set: (state, action: PayloadAction<Todo[]>) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    create: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload,
            done: false,
          } as Todo,
        ],
      };
    },
    update: (
      state,
      action: PayloadAction<Partial<Todo> & { id: Todo["id"] }>
    ) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                ...action.payload,
              }
            : todo
        ),
      };
    },
    remove: (state, action: PayloadAction<Todo["id"]>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (signal?: AbortSignal) => {
    return API.fetchTodos(signal);
  }
);

// Action creators are generated for each case reducer function
export const { set, create, update, remove } = todoSlice.actions;
export { fetchTodos };

export default todoSlice.reducer;
