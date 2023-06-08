import * as React from "react";
import * as LC from "./components";
import styles from "./todo-list.module.scss"

interface TodoListProps {
}

interface Todo {
  id: string | number;
  title: string;
  content?: string;
}

const TODOS = [
  {
    id: 0,
    title: "First todo",
    content: "Do first todo",
  },

  {
    id: 1,
    title: "Second todo",
    content: "Do second todo",
  }
];

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = React.useState<Todo[]>(TODOS);

  return <div className={styles.wrapper}>
    {
      todos.map(({id, title, content}) => (
        <LC.Todo title={title} content={content} key={id}/>
      ))
    }
  </div>;
};

export default TodoList;
