import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// catch actions and log it out
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

// more array and loggers
const middelwares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}

// a func get root reducer
export const store = createStore(rootReducer, applyMiddleware(...middelwares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
