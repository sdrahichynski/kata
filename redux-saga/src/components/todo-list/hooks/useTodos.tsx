import * as React from "react";
import * as H from "hooks";
import { fetchTodos } from "../redux";
import * as LA from "../redux";
import { Todo } from "../types";

const useTodos = () => {
  const { todos, status, error } = H.useAppSelector((state) => state.todoList);
  const dispatch = H.useAppDispatch();

  H.useFetch(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(status);

  return {
    loading: status === "loading",
    error,
    todos: todos || ([] as Todo[]),
    remove: (id: Todo["id"]) => dispatch(LA.remove(id)),
    update: (id: Todo["id"], fields: Partial<Todo>) =>
      dispatch(LA.update({ id, ...fields })),
    add: (title: string) => dispatch(LA.create(title)),
  };
};

export default useTodos;
