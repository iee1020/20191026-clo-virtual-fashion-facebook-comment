import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import modules from "./modules";

const configure = () => {
  const store = createStore(modules, applyMiddleware(logger));
  return store;
};

export default configure;
