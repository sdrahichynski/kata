import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Provider, createClient, fetchExchange } from "urql";

const client = createClient({
  exchanges: [fetchExchange],
  url: "http://localhost:4000/graphql",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
