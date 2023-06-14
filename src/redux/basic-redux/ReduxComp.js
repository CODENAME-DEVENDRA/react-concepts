import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxComp() {

    const dispatch = useDispatch()
    const val = useSelector((state) => state.username)

    const updateName = (name) => {
        return {
            type: "CHANGE_NAME",
            payload: {
                username: name
            }
        }
    }

    const handleClick = () => {
        dispatch(updateName("Devendra"))
    }

    return (
        <>
            <h1>{val}</h1>
            <button onClick={handleClick}>Change Name</button>


        </>
    )
}

export default ReduxComp