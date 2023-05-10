import * as React from "react";
import * as T from "types";
import Card from "../card";
import style from "./todos-list.module.scss";

interface TodosListProps {
  title: string;
  todos: T.ToDo[];
}

const TodosList: React.FC<TodosListProps> = ({ title, todos: propsTodos }) => {
  const [todos, setTodos] = React.useState(propsTodos);

  return (
    <div className={style.inner}>
      {title && (
        <header className={style.header}>
          <h3 className={style.title}>Title</h3>
          <button>...</button>
        </header>
      )}

      {!!todos.length && (
        <div className={style.body}>
          {todos.map(({ title, id }) => (
            <Card title={title} id={id} />
          ))}
        </div>
      )}

      <footer className={style.footer}>
        <button
          onClick={() =>
            setTodos((prevTodos) => [
              ...prevTodos,
              {
                id: "temp id",
                title: "123",
                location: { col: 1, row: 5 },
              },
            ])
          }
        >
          + Add card
        </button>
      </footer>
    </div>
  );
};

export default TodosList;
