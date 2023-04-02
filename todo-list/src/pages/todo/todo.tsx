import * as React from "react";
import { Resource } from "components";

interface TodoProps {}

const List = React.lazy(() => import("./components/list"));
const Show = React.lazy(() => import("./components/show"));

const Todo: React.FC<TodoProps> = () => {
  return <Resource list={List} show={Show} />;
};

export default Todo;
