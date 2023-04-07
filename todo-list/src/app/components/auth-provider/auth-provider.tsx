import * as React from "react";
import { AuthContext, LT, request } from "./duck";

interface AuthProviderProps extends React.PropsWithChildren {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<LT.Auth["user"]>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // sign in check
    request
      .signInCheck()
      .then((user) => {
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn: !!user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
