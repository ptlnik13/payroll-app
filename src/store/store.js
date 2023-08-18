import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {rootReducer} from "./root-reducer";
import thunk from "redux-thunk";
// Create persist configuration so, redux keeps existing data while refresh the page
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk]
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
