import * as React from "react";
import { AuthContext, LT, request } from "./duck";

interface AuthProviderProps extends React.PropsWithChildren {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = React.useState<LT.Auth>({ user: null });

  React.useEffect(() => {
    // sign in check
    request.signInCheck().then((user) => {
      setAuth({ user });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={[
        {
          ...auth,
        },
        setAuth,
      ]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
