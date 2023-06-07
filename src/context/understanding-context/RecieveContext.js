import React, { useContext } from 'react'
import { UserContext } from './SendContext'

function RecieveContext() {

    const user = useContext(UserContext)

    return (
        <>
            <h1>RecieveContext</h1>
            <p>{user}</p>
        </>
    )
}

export default RecieveContext