import { createStore, applyMiddleware } from "redux";

// catch actions and log it out
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// more array and loggers
const middelwares = [logger];

// a func get root reducer
const store = createStore(rootReducer, applyMiddleware(...middelwares));

export default store;
