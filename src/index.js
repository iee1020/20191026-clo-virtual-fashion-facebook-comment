import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./store";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import modules from "./store/modules";
import App from "./components/App";

const store = createStore(modules, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
