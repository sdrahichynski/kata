import { FormEventHandler } from "react";
import * as React from "react";
import * as T from "types";
import Card from "../card";
import style from "./todos-list.module.scss";

interface TodosListProps {
  title: string;
  todos: T.ToDo[];
}

const TodosList: React.FC<TodosListProps> = ({ title, todos: propsTodos }) => {
  const [todos, setTodos] = React.useState(
    propsTodos.map((item, index) => ({ ...item, index }))
  );
  const [addTodo, setAddTodo] = React.useState(false);

  const handleAdd = () => setAddTodo(true);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // @ts-ignore
    const title = e.currentTarget.title?.val;
    ue;

    setTodos((prevTodos) => [
      ...todos,
      {
        id: Date.now().toString(),
        title: title || "",
        index: prevTodos.length,
      },
    ]);

    setAddTodo(false);
  };

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
            <Card key={id} title={title} id={id} />
          ))}
        </div>
      )}

      <footer className={style.footer}>
        {addTodo ? (
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <br />
              <input name="title" type="text" />
            </label>
            <button>Add</button>
          </form>
        ) : (
          <button onClick={handleAdd}>+ Add card</button>
        )}
      </footer>
    </div>
  );
};

export default TodosList;
