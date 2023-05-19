import React, { useState } from 'react'

function StateArray() {

    const [list, setList] = useState([1])


    const handleUpdate = () => {
        setList([...list, list.length + 1])
    }

    return (
        <div>
            <button onClick={handleUpdate}>Update</button>
            <h1>{String(list)}</h1>
            <ul>
                {list.map((n, i) => {
                    return <li key={i}>{n}</li>
                })}
            </ul>
        </div>
    )
}

export default StateArray