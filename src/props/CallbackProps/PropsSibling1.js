import React from 'react'

function PropsSibling1({ parentStore }) {

    //data
    const name = "devendra"
    parentStore(name)

    return (
        <div>
            <h1>PropsSibling1</h1>

        </div>
    )
}

export default PropsSibling1