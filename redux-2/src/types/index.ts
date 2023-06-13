export type ID = number | string;

export interface Todo {
  id: ID;
  title: string;
  done: boolean;
}

export type FetchStatus = "idle" | "loading" | "success" | "error";
