import React from 'react'
import { ContextGet } from './ContextFile'

function ContextComp() {

    const { name, setName } = ContextGet()


    return (
        <>
            <div>{name}</div>
            <button onClick={() => setName("John")}>Click</button>
        </>
    )
}

export default ContextComp