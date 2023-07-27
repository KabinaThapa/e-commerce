import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
export interface Item{
    id:number,
    title:string,
    price:number,
    quantity:number,
}

export interface State{
    items:Item[],
    cartQuantity:number,
    cartAmount:number,
   
}
const initialState:State={
    items:[],
    cartQuantity:0,
    cartAmount:0,
}
 export const cartListSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<Item>)=>{
            const existingItem=state.items.find((item)=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity+=1
            }
           else{
              
            state.items.push({...action.payload, quantity:1})
        }
        state.cartQuantity+=1
        state.cartAmount+=action.payload.price

         toast.success('Item added to cart!')
        
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        const itemtoremove=state.items.find((item)=>item.id===action.payload)
        if(itemtoremove){
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.cartQuantity-=itemtoremove.quantity
        state.cartAmount-=itemtoremove.price * itemtoremove.quantity
        }
      },
      increment:(state,action: PayloadAction<number>)=>{
        const item = state.items.find((item)=>item.id===action.payload)
        if(item){
            item.quantity+=1
            state.cartQuantity += 1;
             state.cartAmount += item.price;
        }

      },
      decrement:(state,action: PayloadAction<number>)=>{
        const item = state.items.find((item)=>item.id===action.payload)
        if(item && item.quantity>1){
            item.quantity-=1
            state.cartQuantity -= 1;
        state.cartAmount -= item.price;
        }
        
      }
    
},
})
export const {addToCart, removeFromCart, increment, decrement} = cartListSlice.actions
export default cartListSlice.reducer