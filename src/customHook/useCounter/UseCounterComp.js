import React from 'react'
import { useCounter } from './useCounter'

function UseCounterComp() {

    const { count, decrement, increment } = useCounter(2)

    return (
        <>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </>
    )
}

export default UseCounterComp