import * as React from "react";
import { Link } from "react-router-dom";
import * as T from "types";
import * as LC from "./components";
import style from "./list.module.scss";

const LIST: T.ToDo[] = [
  {
    id: "1",
    title: "Develop resource",
  },
  {
    id: "2",
    title: "AUTH",
    content: "Provide Auth",
  },
  {
    id: "3",
    title: "Mock API",
    content: "Provide Auth",
  },
];

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const [columns, setColumns] = React.useState<T.ToDoColumn[]>([
    {
      title: "first column",
      todos: LIST,
    },
  ]);

  return (
    <div className={style.wrapper}>
      {columns.map(({ title, todos }, i) => (
        <div className={style.column} key={i}>
          <LC.TodosList title={title} todos={todos} />
        </div>
      ))}

      <div className={style.column}>
        <button
          onClick={() =>
            setColumns((prevColumns) => [
              ...prevColumns,
              { title: "New Title", todos: [] },
            ])
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default List;
