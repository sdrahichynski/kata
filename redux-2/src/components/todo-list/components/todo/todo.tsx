import * as React from "react";
import * as T from "types";
import styles from "./todo.module.scss";

interface TodoProps extends Omit<T.Todo, "id"> {
  onRemove: () => void;
  onChange: (fiels: Partial<T.Todo>) => void;
}

const Todo: React.FC<TodoProps> = ({ title, done, onRemove, onChange }) => {
  return (
    <div className={styles.wrapper + ` ${done ? styles.green : styles.red}`}>
      <h5>{title}</h5>

      <div className={styles.actions}>
        <button onClick={() => onChange({ done: !done })}>u</button>
        <button onClick={() => onRemove()}>x</button>
      </div>
    </div>
  );
};

export default Todo;
