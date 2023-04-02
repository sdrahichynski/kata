import * as React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "pages";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route index element={<P.ToDo />} />
      <Route path={"todos/*"} element={<P.ToDo />} />
    </Routes>
  );
};

export default AppRouter;
