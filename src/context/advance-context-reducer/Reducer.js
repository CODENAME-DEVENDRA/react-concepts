import React, { createContext } from 'react'

export const CountContext = createContext()

export const initialState = {
    count: 0
}

const Reducer = (state, action) => {

    switch (action.type) {

        case "INCREMENT":
            return { ...state, count: state.count + 1 }

        case "DECREMENT":
            return { ...state, count: state.count - 1 }

        default:
            return state;
    }

}

export default Reducer