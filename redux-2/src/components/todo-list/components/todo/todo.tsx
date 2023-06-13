import * as React from "react";
import * as T from "types";
import styles from "./todo.module.scss";

interface TodoProps extends Omit<T.Todo, "id"> {}

const Todo: React.FC<TodoProps> = ({ title, done }) => {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>

      {done ? "done" : "TODO!"}
    </div>
  );
};

export default Todo;
