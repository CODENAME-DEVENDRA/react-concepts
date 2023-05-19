import React, { useState } from 'react'

function StateNum() {

    //counter
    const [num, setNum] = useState(0)

    const decrement = () => {
        setNum(num - 1)
    }

    const increment = () => {
        setNum((prevState) => prevState + 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{num}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default StateNum