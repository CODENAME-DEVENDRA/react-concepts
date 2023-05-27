import React, { useState } from 'react'

function StateBoolean() {

    const [toggle, setToggle] = useState(false)

    const handleChange = () => {
        setToggle(true)
    }

    console.log(toggle);
    return (
        <div>
            {String(toggle)}
            <button onClick={handleChange}>Change</button>
        </div>
    )
}

export default StateBoolean