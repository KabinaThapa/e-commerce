// store.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";

import cartSliceReducer from "../features/cartListSlice";
import { fetchapi } from "./../features/productSlice";
import wishListSliceReducer from "../features/wishListSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartSliceReducer,
  [fetchapi.reducerPath]: fetchapi.reducer,
  wishlist: wishListSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchapi.middleware),
});

export type RootState = ReturnType<typeof store.getState> & PersistPartial;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
