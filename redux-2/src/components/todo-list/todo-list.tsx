import * as React from "react";
import * as LC from "./components";
import { useTodos } from "./hooks";
import styles from "./todo-list.module.scss";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos, addTodo, update, remove } = useTodos();

  return (
    <div className={styles.wrapper}>
      <LC.AddTodo onSubmit={addTodo} />

      {todos.map(({ title, done, id }) => (
        <LC.Todo
          key={id}
          title={title}
          done={done}
          onChange={(fields) => update(id, fields)}
          onRemove={() => remove(id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
