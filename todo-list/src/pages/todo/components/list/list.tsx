import * as React from "react";
import { Link } from "react-router-dom";
import * as T from "types";
import * as LC from "./components";
import style from "./list.module.scss";

const LIST: T.ToDo[] = [
  {
    id: "1",
    title: "Develop resource",
    location: {
      col: 0,
      row: 0,
    },
  },
  {
    id: "2",
    title: "AUTH",
    content: "Provide Auth",
    location: {
      col: 0,
      row: 0,
    },
  },
  {
    id: "3",
    title: "Mock API",
    content: "Provide Auth",
    location: {
      col: 0,
      row: 0,
    },
  },
];

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const [columns, setColumns] = React.useState<T.ToDoColumn[]>([
    {
      title: "first column",
      todos: [LIST[0]],
    },
  ]);

  return (
    <div className={style.wrapper}>
      {columns.map(({ title, todos }, i) => (
        <div className={style.column}>
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
