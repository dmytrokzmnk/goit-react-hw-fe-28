import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import globalState from "./redux/store";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById("root")
);
