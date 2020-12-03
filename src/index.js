import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {/* {window.navigator.onLine ? <App /> : <h1>offline</h1>} */}
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);
