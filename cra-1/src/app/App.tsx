import { BrowserRouter } from "react-router-dom";
import * as LC from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <LC.AppRouter />
    </BrowserRouter>
  );
};

export default App;
