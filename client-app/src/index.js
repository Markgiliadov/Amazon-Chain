import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

import { TransactionsProvider } from "./Contexts/TransactionContext";
ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
