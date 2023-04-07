import * as React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "pages";
import { useAuth } from "hooks";
import * as LC from "./components";
import * as L from "layouts";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>"LOADING"</div>;
  }

  return (
    <Routes>
      {/* public routes */}
      <Route element={<L.Unauthorized />}>
        <Route path="/login" element={<P.Login />} />
        <Route path="/register" element={<P.Registration />} />
      </Route>

      <Route element={<LC.AuthRoutes />}>
        <Route element={<L.Primary />}>
          <Route index element={<P.ToDo />} />
          <Route path={"todos/*"} element={<P.ToDo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
