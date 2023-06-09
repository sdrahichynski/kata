import * as React from "react";
import styles from "./add-todo.module.scss";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [input, setInput] = React.useState("");

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (input) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button disabled={!input} type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
