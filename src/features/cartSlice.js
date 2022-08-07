import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: null,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state) => {
            state.amount += 1
        }
    },
})

export default cartSlice.reducer
export const { addItem, removeItem } = cartSlice.actions