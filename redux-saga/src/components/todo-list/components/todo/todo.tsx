import * as React from "react";
import styles from "./todo.module.scss"

interface TodoProps {
  title: string;
  content?: string;
}

const Todo: React.FC<TodoProps> = ({ title, content }) => {
  return (
    <article className={styles.wrapper}>
      <header>
        <h4>{title}</h4>
      </header>

      {content}
    </article>
  );
};

export default Todo;
