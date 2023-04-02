import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import * as LC from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <LC.AppRouter />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
