import React from 'react'
import classes from "./todo.module.css"
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa"

function TodoList({ todos }) {
    return (
        <>
            {todos.map((todo) => {
                return <li className={classes.todoList}>
                    <div>
                        {todo.title}
                    </div>
                    <div className={classes.iconWrapper}>
                        <button className={classes.buttonComplete}><FaCheckCircle /></button>
                        <button className={classes.buttonEdit}><FaEdit /></button>
                        <button className={classes.buttonDelete}><FaTrash /></button>
                    </div>
                </li>
            })}
        </>
    )
}

export default TodoList