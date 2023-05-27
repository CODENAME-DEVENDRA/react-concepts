import React from 'react'
import Comp1 from './Comp1'


//data from comp1 to comp3
//relation comp1 -> comp2 -> comp3

function PropDrilling() {
    return (
        <div>
            <h1>PropDrilling</h1>
            <Comp1 />
        </div>
    )
}

export default PropDrilling