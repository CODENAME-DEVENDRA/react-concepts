import React, { useState } from 'react'
import classes from "./todo.module.css"
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'

function Todo() {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    return (
        <div className={classes.todoContainer}>
            <div className={classes.todoWrapper}>
                <Header />
                <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                />
                <TodoList
                    todos={todos}
                />
            </div>
        </div>
    )
}

export default Todo