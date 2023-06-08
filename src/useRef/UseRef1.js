import React, { useRef } from 'react'

function UseRef1() {

    const inputRef = useRef()

    const handleClick = () => {
        // console.log(inputRef);
        console.log(inputRef.current.value);
    }

    return (
        <>
            <input type='text' placeholder='Enter Something...' ref={inputRef} />
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UseRef1