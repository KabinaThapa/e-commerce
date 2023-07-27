import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from '../features/cartListSlice'
import { fetchapi } from './../features/productSlice';

export const store=configureStore({
    reducer:{
        cart:cartSliceReducer,
        [fetchapi.reducerPath]: fetchapi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(fetchapi.middleware)
    
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch