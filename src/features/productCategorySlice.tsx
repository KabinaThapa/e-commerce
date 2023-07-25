//import {createSlice} from '@reduxjs/toolkit'
//import type {PayloadAction} from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productCategory= createApi({
    reducerPath:'fetchapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.escuelajs.co/api/v1/'}),
    endpoints:(builder)=>({
        getProductsCategories: builder.query({
            query:()=>'categories'
        }),
        getProductCategoriesID:builder.query({
            query:(categoryID)=>`/categories/${categoryID}`
        })


    }),
    
})
export const{ useGetProductsQuery }=productCategory