import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./sliceReducer"

export const sliceStore = configureStore({
    reducer: {
        counter: countReducer
    }
})