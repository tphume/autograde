import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "./contexts/auth";
import App from "./pages/root";
import AuthContextProvider from "./contexts/auth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
