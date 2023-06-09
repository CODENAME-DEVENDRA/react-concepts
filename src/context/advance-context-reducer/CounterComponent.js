import React, { useContext } from 'react'
import { CountContext } from './Reducer'

function CounterComponent() {

    const { state, dispatch } = useContext(CountContext)

    return (
        <>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <span>Count {state.count}</span>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
        </>
    )
}

export default CounterComponent