import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PropsLearning from "./PropsLearning";
import StatePropsLearning from "./StatePropsLearning";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <StatePropsLearning />
  </React.StrictMode>,
  rootElement
);
