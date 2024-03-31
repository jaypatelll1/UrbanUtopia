import { createSlice } from "@reduxjs/toolkit";
export const WishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            const itemPresent=state.wishlist.find((item)=>item.code===action.payload.code);
            if(itemPresent){
                itemPresent.quantity++;
            }
            else{
                state.wishlist.push({...action.payload,quantity:1});
            }
        },
        removeFromWishlist:(state,action)=>{
            const removeItem=state.wishlist.filter((item)=>item.code!==action.payload.code);
            state.wishlist=removeItem;
        },
        cleanWishlist:(state)=>{
            state.wishlist=[];
        }
    }
})

export const {addToWishlist,removeFromWishlist,cleanWishlist}=WishlistSlice.actions;

export default WishlistSlice.reducer;