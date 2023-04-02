import * as T from "types";

export interface Auth {
  user: T.User | null;
}

export type SetAuth = React.Dispatch<React.SetStateAction<Auth>>;
