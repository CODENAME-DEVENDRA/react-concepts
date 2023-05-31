import React, { useState } from 'react'
import classes from "./todo.module.css"

function Form({ input, setInput, todos, setTodos }) {

    console.log(todos);

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { title: input }])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter a Todo...'
                    onChange={handleChange}
                    className={classes.todoInput}
                    value={input}
                />
                <button type='submit' className={classes.todoButton}>Add</button>
            </form>
        </>
    )
}

export default Form