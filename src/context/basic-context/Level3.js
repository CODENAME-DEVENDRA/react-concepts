import React, { useContext } from 'react'
import { FormContext } from './BasicForm'

function Level3() {

    const formData = useContext(FormContext)
    console.log("level3", formData);

    return (
        <>
            <h1>Level3</h1>
            {formData.map((user) => {
                return <>
                    <h3>{user.name}</h3>
                    <h3>{user.age}</h3>
                </>
            })}
        </>
    )
}

export default Level3