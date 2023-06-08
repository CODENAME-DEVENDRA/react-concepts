import React, { useRef } from 'react'

function UseRef2() {

    const focusRef = useRef()

    const handleClick = () => {
        focusRef.current.focus()
    }

    return (
        <>
            <input />
            <input />
            <input ref={focusRef} />
            <input />
            <button onClick={handleClick}>X</button>
        </>
    )
}

export default UseRef2