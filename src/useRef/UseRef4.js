import React, { useRef, useState } from 'react'

function UseRef4() {

    //state
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    //useRef
    const countRef = useRef(0)
    const handleButtonClick = () => {
        countRef.current += 1   //countRef.current = countRef.current+1
        // console.log(`counter : ${countRef.current}`);
    }

    const handlePrint = () => {
        console.log(`counter : ${countRef.current}`);
    }

    return (
        <>
            <h1>State</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>+</button>

            <hr />

            <h1>UseRef</h1>
            <h2>{`counter : ${countRef.current}`}</h2>
            <button onClick={handleButtonClick}>+</button>
            <button onClick={handlePrint}>Print</button>
        </>
    )
}

export default UseRef4