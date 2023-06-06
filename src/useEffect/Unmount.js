import React, { useEffect, useState } from 'react'

function Unmount() {

    const [count, setCount] = useState(0)

    return (
        <>
            {count < 5 && <RenderUi count={count} />}
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </>
    )
}

export default Unmount


function RenderUi({ count }) {

    //mount and unmount
    // useEffect(() => {
    //     console.log("Mount" + count);
    //     return () => {
    //         console.log("Unmount" + count);
    //     }
    // }, [])

    //update
    useEffect(() => {
        console.log("Mount" + count);
        return () => {
            console.log("Unmount" + count);
        }
    }, [count])

    return (
        <>
            <div>Count {count}</div>
        </>
    )
}