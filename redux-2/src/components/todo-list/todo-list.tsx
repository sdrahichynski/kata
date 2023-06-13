import * as React from "react";
import * as LC from "./components";
import styles from "./todo-list.module.scss";

interface TodoListProps {}

const TODOS = [
  {
    id: 1,
    title: "test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1",
    done: false,
  },
  {
    id: 2,
    title: "test 2e",
    done: true,
  },
];

const TodoList: React.FC<TodoListProps> = () => {
  const todos = TODOS;

  return (
    <div className={styles.wrapper}>
      <LC.AddTodo />

      {todos.map(({ title, done, id }) => (
        <LC.Todo key={id} title={title} done={done} />
      ))}
    </div>
  );
};

export default TodoList;
