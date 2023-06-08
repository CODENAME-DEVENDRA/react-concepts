import React, { useReducer, useState } from 'react'
import "./style.css"

function ReducerComp() {

    // const [count, setCount] = useState(0)
    // const [toggle, setToggle] = useState(false)


    //step2
    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case "COUNTER":
                return { ...state, count: state.count + 1 };

            case "TOGGLE":
                return { ...state, toggle: !state.toggle }

            default:
                return state;
        }

    }

    //step1
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        toggle: false
    })


    //step 3
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "COUNTER" })}>+</button>

            <hr />

            <button onClick={() => dispatch({ type: "TOGGLE" })}>Click</button>
            {state.toggle && <div className='toggle'></div>}
        </>
    )
}

export default ReducerComp