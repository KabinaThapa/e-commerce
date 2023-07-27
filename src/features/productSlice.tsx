//import {createSlice} from '@reduxjs/toolkit'
//import type {PayloadAction} from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const fetchapi= createApi({
    reducerPath:'fetchapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>'products'
        }),
        getProductsID:builder.query({
            query:(productID)=>`products/${productID}`
        }),
        getProductsCategories: builder.query({
            query:()=>`/products/categories`
        }),
        getProductCategoriesName:builder.query({
            query:(category)=>`products/category/${category}`
        }),

    }),
    
})
export const{ useGetProductsQuery,useGetProductCategoriesNameQuery, useGetProductsCategoriesQuery, useGetProductsIDQuery }=fetchapi