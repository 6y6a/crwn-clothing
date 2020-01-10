import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import logger from 'redux-logger'
import createSageMiddleware from 'redux-saga'

import RootReducer from "./RootReducer";
import rootSaga from "./RootSaga";

const sagaMiddlware = createSageMiddleware()

const middlewares = [sagaMiddlware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares))

sagaMiddlware.run(rootSaga)

export const persistor = persistStore(store)
