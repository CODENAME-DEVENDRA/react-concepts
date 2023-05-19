import React, { useState } from 'react'

function Main() {

    const [toggle, setToggle] = useState(true)

    const abc = {
        height: "25vh",
        width: "25vw",
        backgroundColor: "red"
    }
    console.log(toggle);

    const handleChange = () => {
        setToggle(!toggle)
    }


    return (
        <div>
            <button onClick={handleChange}>{toggle ? "Hide" : "Show"}</button>
            {/* {toggle ? <div style={abc}></div> : null} */}
            {toggle && <div style={abc}></div>}
        </div >
    )
}

export default Main

//if else
//switch

//ternary
//&& operator
