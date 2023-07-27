import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface Item{
    id:number,
    title:string,
    price:number,
    quantity:number,
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
            const existingItem=state.items.find((item)=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity+=1
            }
           else{
              
            state.items.push({...action.payload, quantity:1})}
         
        
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    
},
})
export const {addToCart, removeFromCart} = cartListSlice.actions
export default cartListSlice.reducer