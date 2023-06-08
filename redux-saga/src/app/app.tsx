import * as React from "react";
import * as C from "components";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <div>
    <C.TodoList />
  </div>;
};

export default App;
