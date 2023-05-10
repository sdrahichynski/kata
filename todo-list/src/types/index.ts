export interface ToDo {
  id: string;
  title: string;
  content?: string;
  location: {
    col: number;
    row: number;
  };
}

export interface ToDoColumn {
  title: string;
  todos: ToDo[];
}

export interface User {
  id: string;
  userName: string;
}
