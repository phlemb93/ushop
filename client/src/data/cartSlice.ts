import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../utilities/types/types";


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:CartState, action:PayloadAction<CartItem>) => {
            const itemExist = state.cartItems.find(item => item._id === action.payload._id);
            if(itemExist) {
                itemExist.quantity++;
            } else {
                state.cartItems.push(action.payload)
            }
        },
        decrQuantity: (state:CartState, action:PayloadAction<CartItem>) => {
            const itemExist = state.cartItems.find(item => item._id === action.payload._id);
            if(itemExist && itemExist.quantity > 1) {
                itemExist.quantity--;
            } else {
                const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
                state.cartItems = remainingItems;
            }
        },
        removeProduct: (state:CartState, action:PayloadAction<CartItem>) => {
           const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
           state.cartItems = remainingItems;
        }

    } 
})

export const { addToCart, decrQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;