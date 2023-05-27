import React, { useState } from 'react'
import classes from "./event.module.css"

function Main() {

    //2
    // function handleClick() {
    //     console.log("button clicked");
    //     alert("button clicked")
    // }

    // 3
    // function handleClick(e) {
    //     console.log(e);
    //     alert("button clicked")
    // }


    // 4
    // function handleClick(e) {
    //     console.log(e);
    //     alert("button clicked")
    // }

    // // 5A
    // function handleClick() {
    //     console.log("button clicked");
    //     alert("button clicked")
    // }

    // 5B
    // function handleClick(e) {
    //     console.log(e);
    //     alert("button clicked")
    // }

    // 6
    // const handleClick = (e) => {
    //     e.stopPropagation()
    //     console.log("button clicked");
    // }

    // const handleDivCLick = function () {
    //     console.log("div clicked");
    // }

    // 7
    const [str, setStr] = useState("")
    const [arr, setArr] = useState([])

    console.log(arr);
    const handleChange = (e) => {
        console.log(e.target.value);
        setStr(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted successfully");
        setArr([str])
    }

    return (
        <div>
            {/* 1 */}
            {/* <button onClick={() => console.log("button clicked")}>Click</button> */}

            {/* 2 */}
            {/* <button onClick={() => handleClick()}>Click</button> */}

            {/* 3 */}
            {/* <button onClick={(event) => handleClick(event)}>Click</button> */}

            {/* 4 */}
            {/* <button onClick={() => handleClick("hello")}>Click</button> */}

            {/* 5 */}
            {/* <button onClick={handleClick}>Click</button> */}

            {/* 6 */}
            {/* <div onClick={handleDivCLick}>
                <button onClick={handleClick}>Click</button>
            </div> */}

            {/* 7 */}
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter text' onChange={handleChange} />
                <button className={classes.btn} type='submit'>Submit</button>
            </form>
            <div>
                <h1>{str}</h1>
                <ul>{arr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}</ul>
            </div>
        </div>
    )
}

export default Main