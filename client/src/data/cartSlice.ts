import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../utilities/types/types";

//Get Cart Items from Local Storage
const items = JSON.parse(`${localStorage.getItem('cart')}`);
const cartStorage = localStorage.getItem('cart') ? items : []

const initialState = {
    cartItems: cartStorage
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
                const items: CartItem[] = state.cartItems;
                items.push(action.payload)
            }

            //Update Local Storage
            localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)));
        },
        decrQuantity: (state:CartState, action:PayloadAction<CartItem>) => {
            const itemExist = state.cartItems.find(item => item._id === action.payload._id);
            if(itemExist && itemExist.quantity > 1) {
                itemExist.quantity--;
            } else {
                const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
                state.cartItems = remainingItems;
            }
            
            //Update Local Storage
            localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)));
        },
        removeProduct: (state:CartState, action:PayloadAction<CartItem>) => {
           const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
           state.cartItems = remainingItems;

           //Update Local Storage
           localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)));
        }

    } 
})



export const { addToCart, decrQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;