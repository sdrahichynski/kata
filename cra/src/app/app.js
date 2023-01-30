import * as LC from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LC.AppRouter />
    </BrowserRouter>
  );
}

export default App;
