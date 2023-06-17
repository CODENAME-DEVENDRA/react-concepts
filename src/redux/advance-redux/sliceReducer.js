import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({

    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        incrementBy10: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, incrementBy10 } = countSlice.actions

export default countSlice.reducer
