import * as React from "react";
import styles from "./add-todo.module.scss";

interface AddTodoProps {}

const validateInput = (input: string): boolean => {
  return input.length >= 2;
};

const AddTodo: React.FC<AddTodoProps> = () => {
  const [input, setInput] = React.useState("");
  const isValid = validateInput(input);

  const handleSubmit = () => {
    if (validateInput(input)) {
      console.log(input);
      setInput("");
    }
    console.log("invalid input");
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
