import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cartListSlice'

export const store=configureStore({
    reducer:{
        cart:cartReducer,
    }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch