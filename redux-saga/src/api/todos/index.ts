import { Todo } from "../../components/todo-list/types";

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

export const fetchTodos = async (signal?: AbortSignal) => {
  return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
    signal,
  })
    .then((data) => data.json())
    .then(convertJSONPH);
};
