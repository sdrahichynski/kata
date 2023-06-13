import * as T from "types";

const convert = (data: Array<any>): T.Todo[] => {
  return data.map(({ id, title, completed }) => ({
    id,
    title,
    done: completed,
  }));
};

export const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res) => res.json())
    .then((data) => convert(data));
};
