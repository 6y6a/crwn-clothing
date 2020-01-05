import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from "./User/UserReducer";
import cartReducer from './Cart/CartReducer'
import directoryReducer from "./Directory/DirectoryReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)
