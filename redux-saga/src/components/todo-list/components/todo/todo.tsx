import * as React from "react";
import styles from "./todo.module.scss"

interface TodoProps {
  title: string;
  done: boolean;
  onRemove: () => void;
  onChange: (done: boolean) => void;
}

const Todo: React.FC<TodoProps> = ({ title, done, onRemove, onChange }) => {
  return (
    <div className={styles.wrapper + ` ${done ? styles.done : ""}`}>
      <h4>{title}</h4>

      <div className={styles.actions}>
        <button className={styles.update} onClick={() => onChange(!done)}>✓</button>
        <button className={styles.remove} onClick={() => onRemove()}>X</button>
      </div>
    </div>
  );
};

export default Todo;
