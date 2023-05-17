import * as React from "react";
import { Todo } from "./types";

interface BoardContextValue {
  // drag: Todo | null;
}

export const BoardContext = React.createContext<BoardContextValue>(
  null as unknown as BoardContextValue
);
