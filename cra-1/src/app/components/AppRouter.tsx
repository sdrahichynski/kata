import { Routes, Route } from "react-router-dom";
import * as P from "pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<P.Home />} />
      <Route path={"/bikes/*"} element={<P.Bikes />} />
    </Routes>
  );
};

export default AppRouter;
