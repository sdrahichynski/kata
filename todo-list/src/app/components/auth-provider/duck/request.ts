import * as T from "types";

export const signInCheck = async () => {
  return new Promise<T.User>((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", userName: "Me" });
    }, 300);
  });
};
