import * as H from "../../../hooks";
import * as LA from "../duck";
import * as T from "types";

export const useTodos = () => {
  const { todos, status } = H.useAppSelector((state) => state.todoList);
  const dispatch = H.useAppDispatch();

  H.useFetch(() => {
    dispatch(LA.fetchTodos());
  }, []);

  return {
    todos,
    status,
    addTodo: (title: string) => dispatch(LA.create(title)),
    update: (id: T.ID, fields: Partial<T.Todo>) =>
      dispatch(LA.update({ id, fields })),
    remove: (id: T.ID) => dispatch(LA.remove(id)),
  };
};
