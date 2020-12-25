import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "./contexts/auth";
import App from "./pages/root";
import AuthContextProvider from "./contexts/auth";
import LoadingContextProvider from "./contexts/loading";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <LoadingContextProvider>
          <App />
        </LoadingContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
