import React, { useRef } from 'react'

function UseRef3() {

    const divRef = useRef(null)

    const handleClick = () => {
        // console.log(divRef);
        divRef.current.style.backgroundColor = "red"
    }

    return (
        <>
            <div ref={divRef} style={{ height: "200px", width: "200px", border: "2px solid black" }}>

            </div>
            <button onClick={handleClick}>Click</button>

        </>
    )
}

export default UseRef3