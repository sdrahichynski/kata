import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "../types";

interface TodoState {
  todos: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

export const todoSlice = createSlice({
  name: "todoList",

  initialState: {
    // Multiple possible status enum values
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
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched todos to the array
        state.todos = state.todos.concat(action.payload);
      });
    // .addCase(getTodos.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.error.message
    // })
    // .addCase(getTodos.fulfilled, (state, action) => {
    //   // @ts-ignore
    //   state.todos.push(action.payload)
    // })
  },
});

const convertJSONPH = (
  todos: {
    userId: number | string;
    id: number | string;
    title: string;
    completed: boolean;
  }[]
): Todo[] => {
  return todos.slice(0, 10).map(({ id, title, completed }) => ({
    id,
    title,
    done: completed,
  }));
};

const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (signal: AbortSignal) => {
    return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
      signal,
    })
      .then((data) => data.json())
      .then(convertJSONPH);
  }
);

// Action creators are generated for each case reducer function
export const { set, create, update, remove } = todoSlice.actions;
export { fetchTodos };

export default todoSlice.reducer;
