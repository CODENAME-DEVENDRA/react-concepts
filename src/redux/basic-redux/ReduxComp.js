import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxComp() {

    const dispatch = useDispatch()
    const val = useSelector((state) => state.username)
    const bool = useSelector((state) => state.toggle)

    const updateName = (name) => {

        const modifiedName = name.toUpperCase()

        return {
            type: "CHANGE_NAME",
            payload: {
                username: modifiedName
            }
        }
    }

    const handleClick = () => {
        dispatch(updateName("devendra"))
    }

    return (
        <>
            <h1>{val}</h1>
            <button onClick={handleClick}>Change Name</button>
            <h1>{String(bool)}</h1>
            <button onClick={() => dispatch({ type: "TOGGLE", payload: { toggle: true } })}>Change Boolean</button>
        </>
    )
}

export default ReduxComp