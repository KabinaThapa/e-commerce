//import {createSlice} from '@reduxjs/toolkit'
//import type {PayloadAction} from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const fetchapi= createApi({
    reducerPath:'fetchapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.escuelajs.co/api/v1/'}),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>'products'
        }),

    }),
    
})
export const{ useGetProductsQuery }=fetchapi