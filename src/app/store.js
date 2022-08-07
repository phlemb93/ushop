import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import itemsReducer from '../features/itemsSlice'
import genderReducer from '../features/genderSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        items: itemsReducer,
        gender: genderReducer,
    },
})