import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    items: [],
    error: '',
}

export const fetchItems = createAsyncThunk('features/itemsSlice/fetchItems', () => {
    return axios
            .get('https://fakestoreapi.com/products')
            .then(res =>  res.data) 
            .catch(err => err.message)
})

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
            state.error = ''
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.loading = false
            state.items = []
            state.error = action.error.message
        })
    }
})

export default itemsSlice.reducer