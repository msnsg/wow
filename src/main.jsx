import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/style.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* // <StrictMode> */}
    <App />
    {/* // </StrictMode> */}
  </Provider>
);
