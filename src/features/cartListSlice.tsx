import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface Item{
    id:number,
    title:string,
    price:number,
}

interface State{
    items:Item[],
   
}
const initialState:State={
    items:[]
}
 export const cartListSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<Item>)=>{
           
              
            state.items.push(action.payload)
         
        
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    
},
})
export const {addToCart, removeFromCart} = cartListSlice.actions
export default cartListSlice.reducer