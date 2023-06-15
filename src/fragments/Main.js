import React, { Fragment } from 'react'
import { useCounter } from '../customHook/useCounter/useCounter'

function Main() {
    const { count, increment, decrement } = useCounter(8)

    return (
        // <React.Fragment>Main</React.Fragment>
        // <Fragment>Main</Fragment>
        // <>Main</>
        <>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </>
    )
}

export default Main