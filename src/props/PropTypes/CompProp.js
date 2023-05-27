import React from 'react'
import CompTest from './CompTest'

function CompProp() {
    return (
        <div>
            <CompTest str="devendra" num={10} boolean={false} arr={[1, 2, 3]} obj={{ a: 10, b: 20 }} />
        </div>
    )
}

export default CompProp