import React, { useReducer } from 'react'
import Reducer, { CountContext, initialState } from './Reducer'
import CounterComponent from './CounterComponent'

function Main() {

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <CountContext.Provider value={{ state, dispatch }}>
            <CounterComponent />
        </CountContext.Provider>
    )
}

export default Main