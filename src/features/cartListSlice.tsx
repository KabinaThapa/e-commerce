import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface Item{
    id:number,
    title:string,
    price:number,
    quantity:number,
    image:string,
}

export interface InitialState{
    cartItem:Item[],
    cartQuantity:number,
    cartAmount:number,
}
const initialState:InitialState={
    cartItem:[],
    cartQuantity:0,
    cartAmount:0,
}
 export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Item>)=>{
            const existingItem= state.cartItem.findIndex((item)=>item.id===action.payload.id)
            if(existingItem>=0){
                state.cartItem[existingItem].quantity+=1
            }
            else{
              
            state.cartItem.push({...action.payload, quantity:1})
         }
        
    },
    removeFromCart:(state, action:PayloadAction<Item>)=>{
        const itemIndex = state.cartItem.findIndex((item)=>item.id==action.payload.id)
        if(itemIndex!=-1){
            state.cartItem.splice(itemIndex,1)
        }
    }
}
})
export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer