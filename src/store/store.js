import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {rootReducer} from "./root-reducer";

// Create persist configuration so, redux keeps existing data while refresh the page
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['employee']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store)
