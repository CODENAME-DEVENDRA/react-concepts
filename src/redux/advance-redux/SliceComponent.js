import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementBy10 } from './sliceReducer'

function SliceComponent() {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementBy10(10))}>Increment by 10</button>
        </>
    )
}

export default SliceComponent