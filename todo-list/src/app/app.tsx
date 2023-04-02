import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import * as LC from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LC.AuthProvider>
        <React.Suspense fallback={null}>
          <LC.AppRouter />
        </React.Suspense>
      </LC.AuthProvider>
    </BrowserRouter>
  );
};

export default App;
