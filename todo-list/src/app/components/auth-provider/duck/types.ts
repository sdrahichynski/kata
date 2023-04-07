import * as T from "types";

export type AuthUser = T.User | null;

export interface Auth {
  user: AuthUser;
  isLoading: boolean;
  isLoggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
}
