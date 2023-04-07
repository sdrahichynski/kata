import * as React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks";

interface AuthRouteProps extends React.PropsWithChildren {}

const AuthRoutes: React.FC<AuthRouteProps> = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default AuthRoutes;
