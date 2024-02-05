import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App/App.jsx";
import { CorsOptions } from "cors";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
