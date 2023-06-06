import React, { useEffect, useState } from 'react'

function Update() {

    const [A, setA] = useState(false)
    const [B, setB] = useState(false)

    useEffect(() => {
        console.log("Component Updated");
    }, [A])

    return (
        <>
            <button onClick={() => setA(!A)}>Click A</button>
            <button onClick={() => setB(!B)}>Click B</button>
            <h1>A={String(A)}  B={String(B)}</h1>
        </>
    )
}

export default Update