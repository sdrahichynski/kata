import * as React from "react";
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
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then(convertJSONPH);
};

const useTodos = () => {
  const [loading, setLoading] = React.useState(false);
  const [todos, setTodos] = React.useState<Todo[] | null>(null);

  React.useEffect(() => {
    if (!todos) {
      setLoading(true);

      getTodos().then((response) => {
        setTodos(response);
        setLoading(false);
      });
    }
  }, []);

  return {
    loading,
    todos: todos || ([] as Todo[]),
    remove: (id: Todo["id"]) => {
      setTodos((todos) => todos && todos.filter((todo) => todo.id !== id));
    },
    update: (id: Todo["id"], fields: Partial<Todo>) => {
      setTodos(
        (todos) =>
          todos &&
          todos.map((todo) => (todo.id === id ? { ...todo, ...fields } : todo))
      );
    },
    add: (title: string) =>
      setTodos((todos) => [
        ...(todos || []),
        { title, done: false, id: (todos?.length || 0) + 1 },
      ]),
  };
};

export default useTodos;
