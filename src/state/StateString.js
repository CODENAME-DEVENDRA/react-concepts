import React, { useState } from 'react'

function StateString() {

    // useState
    const [name, setName] = useState("devendra")

    const handleClick = () => {
        setName("john")
        console.log(name);
    }
    // console.log("out", name);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleClick}>Change name</button>
        </div>
    )
}

export default StateString