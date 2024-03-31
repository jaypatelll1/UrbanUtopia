import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import WishlistReducer from "./redux/WishlistReducer";
export default configureStore({
    reducer:{
        cart:CartReducer,
        wishlist:WishlistReducer
    }
})