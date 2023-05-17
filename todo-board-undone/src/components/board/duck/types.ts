export interface Todo {
  id: string | number;
  title: string;
  // location ??
}

export interface TodoList {}

export type TodoBoard = TodoList[];

/*****
 *
 *    Todoboard = TodoList[] = Todo[][];
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
