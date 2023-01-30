import * as React from "react";
import { Route, Routes } from "react-router-dom";
import * as C from "../../../components";
import * as P from "../../../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<C.Layout />}>
        <Route index element={<P.Home />} />
        <Route path="bikes" element={<P.Bikes />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
