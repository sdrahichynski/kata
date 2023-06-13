import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as T from "types";
import * as API from "api";

interface TodoState {
  todos: T.Todo[];
  status: T.FetchStatus;
  error: string | null | undefined;
}

const initialState: TodoState = {
  todos: [],
  status: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            done: false,
          },
        ],
      };
    },
    update: (
      state,
      {
        payload: { id, fields },
      }: PayloadAction<{ id: T.ID; fields: Partial<T.Todo> }>
    ) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, ...fields } : todo
        ),
      };
    },
    remove: (state, action: PayloadAction<T.ID>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    });
  },
});

const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  return API.fetchTodos();
});

export const { create, update, remove } = todosSlice.actions;
export { fetchTodos };
export default todosSlice.reducer;
