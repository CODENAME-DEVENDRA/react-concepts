import React, { useMemo, useState } from 'react'

function UseMemoComp() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // const expensive = () => {
    //     console.log("expensive function called");
    //     return count1 ** count1
    // }

    const expensive = useMemo(() => {
        console.log("expensive function called");
        return count1 ** count1
    }, [count1])

    console.log(expensive);

    return (
        <>
            <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
            <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
            {/* <h1>{expensive()}</h1> */}
            <h1>{expensive}</h1>
        </>
    )
}

export default UseMemoComp

//memoize value