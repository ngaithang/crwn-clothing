import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// catch actions and log it out
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// more array and loggers
const middelwares = [];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}

// a func get root reducer
export const store = createStore(rootReducer, applyMiddleware(...middelwares));

export const persistor = persistStore(store);

export default { store, persistor };
