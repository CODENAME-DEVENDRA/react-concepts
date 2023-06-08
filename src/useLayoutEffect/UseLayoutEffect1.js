import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect1() {

    useLayoutEffect(() => {
        console.log("useLayoutEffect", performance.now());
    }, [])

    useEffect(() => {
        console.log("useEffect", performance.now());
    }, [])


    return (
        <>


        </>
    )
}

export default UseLayoutEffect1