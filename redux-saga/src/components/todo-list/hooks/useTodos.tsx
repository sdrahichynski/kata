import * as React from "react";
import * as H from "hooks";
import * as LA from "../redux";
import { Todo } from "../types";

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

const getTodos = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((data) => data.json())
    .then(convertJSONPH);
};

const useTodos = () => {
  const [loading, setLoading] = React.useState(false);
  const todos = H.useAppSelector((state) => state.todoList);
  const dispatch = H.useAppDispatch();

  React.useEffect(() => {
    if (!todos.length) {
      setLoading(true);

      getTodos().then((response) => {
        // setTodos(response);
        // console.log(response);
        dispatch(LA.set(response));
        setLoading(false);
      });
    }
  }, []);

  return {
    loading,
    todos: todos || ([] as Todo[]),
    remove: (id: Todo["id"]) => dispatch(LA.remove(id)),
    update: (id: Todo["id"], fields: Partial<Todo>) =>
      dispatch(LA.update({ id, ...fields })),
    add: (title: string) => dispatch(LA.create(title)),
  };
};

export default useTodos;
