import * as React from "react";
import * as LC from "./components";
import * as LH from "./hooks";
import styles from "./todo-list.module.scss"

interface TodoListProps {
}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos, loading, remove, update, add } = LH.useTodos();

  if (loading) return <div className={styles.wrapper}>... loading ...</div>;

  return (
    <div className={styles.wrapper}>
      <LC.AddTodo onAdd={(title) => add(title)} />

      {todos.map(({ id, title, done }) => (
        <LC.Todo
          title={`${id}) ${title}`}
          done={done}
          key={id}
          onChange={(done: boolean) => {
            update(id, { done });
          }}
          onRemove={() => {
            remove(id);
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
