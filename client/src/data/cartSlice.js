import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartItems.find(item => item._id === action.payload._id);
            if(itemExist) {
                itemExist.quantity++;
            } else {
                state.cartItems.push(action.payload)
            }
            state.quantity += 1
            state.total += action.payload.price
        },
        decrQuantity: (state, action) => {
            const itemExist = state.cartItems.find(item => item._id === action.payload._id);
            if(itemExist.quantity > 1) {
                itemExist.quantity--;
            } else {
                const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
                state.cartItems = remainingItems;
            }
            state.quantity -= 1
            state.total -= action.payload.price
        },
        removeProduct: (state, action) => {
           const remainingItems =  state.cartItems.filter(item => item._id !== action.payload._id)
           state.cartItems = remainingItems;
        }

    } 
})

export const { addToCart, decrQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;