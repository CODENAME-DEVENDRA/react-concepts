import React from 'react'

function Comp3({ name }) {
    console.log("comp3", name);
    return (
        <div>
            <h1>Comp3</h1>
            <p>{name}</p>
        </div>
    )
}

export default Comp3