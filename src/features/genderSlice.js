import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    male: false,
    female: false,
    all: true,
}


const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {
        maleSelected: (state) => {
            state.male = true
            state.female = false
            state.all = false
        },
        femaleSelected: (state) => {
            state.female = true
            state.male = false
            state.all = false
        },
        allSelected:(state) => {
            state.all = true
            state.female = false
            state.male = false
        },
    },
})

export default genderSlice.reducer
export const { maleSelected, femaleSelected, allSelected } = genderSlice.actions