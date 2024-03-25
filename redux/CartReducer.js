import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.code===action.payload.code);
            if(itemPresent){
                itemPresent.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            const removeItem=state.cart.filter((item)=>item.code!==action.payload.code);
            state.cart=removeItem;
        },
        incrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.code===action.payload.code);
            itemPresent.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.code===action.payload.code);
            if(itemPresent.quantity===1){
                itemPresent.quantity=0;
                const removeItem=state.cart.filter((item)=>item.code!==action.payload.code);
                state.cart=removeItem;
            }
            else{
                itemPresent.quantity--;
            }
        },
        cleanCart:(state)=>{
            state.cart=[];
        }
    }
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,cleanCart}=CartSlice.actions;

export default CartSlice.reducer;