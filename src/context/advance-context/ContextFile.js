import React, { createContext, useContext, useState } from 'react'

//step 1
const ContextAdv = createContext()

function ContextFile({ children }) {

    const [name, setName] = useState("Devendra")

    return (
        <>
            <ContextAdv.Provider value={{ name, setName }}>
                {children}
            </ContextAdv.Provider>
        </>
    )
}

export default ContextFile

export const ContextGet = () => {

    return useContext(ContextAdv)

}

