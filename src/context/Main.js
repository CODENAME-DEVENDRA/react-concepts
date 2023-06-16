import React from 'react'
import SendContext from './understanding-context/SendContext'
import BasicForm from './basic-context/BasicForm'
import AdvanceWithReducer from './advance-context-reducer/Main'
import AdvanceContext from './advance-context/AdvanceContext'

function Main() {
    return (
        <>
            {/* <SendContext /> */}
            {/* <BasicForm /> */}
            {/* <AdvanceWithReducer /> */}
            <AdvanceContext />
        </>
    )
}

export default Main