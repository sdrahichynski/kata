import * as React from "react";
import * as C from "components";

interface BikesProps {}

const list = React.lazy(() => import("./components/list"));
const show = React.lazy(() => import("./components/show"));

const Bikes: React.FC<BikesProps> = () => {
  return (
    <React.Suspense fallback={null}>
      <C.Resource list={list} show={show} />
    </React.Suspense>
  );
};

export default Bikes;
