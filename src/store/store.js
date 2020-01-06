import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import logger from 'redux-logger'

import RootReducer from "./RootReducer";

const middlewares = []

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
