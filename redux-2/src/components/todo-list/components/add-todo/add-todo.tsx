import * as React from "react";
import styles from "./add-todo.module.scss";

interface AddTodoProps {
  onSubmit(title: string): void;
}

const validateInput = (input: string): boolean => {
  return input.length >= 2;
};

const AddTodo: React.FC<AddTodoProps> = ({ onSubmit }) => {
  const [input, setInput] = React.useState("");
  const isValid = validateInput(input);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (validateInput(input)) {
      onSubmit(input);
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
      <button disabled={!isValid}>Add</button>
    </form>
  );
};

export default AddTodo;
