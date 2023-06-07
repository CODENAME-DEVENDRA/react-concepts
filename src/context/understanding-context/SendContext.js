import React, { createContext } from 'react'
import RecieveContext from './RecieveContext'

export const UserContext = createContext()

function SendContext() {

    const name = "Devendra"

    return (
        <>
            <UserContext.Provider value={name}>
                <RecieveContext />
            </UserContext.Provider>
        </>
    )
}

export default SendContext