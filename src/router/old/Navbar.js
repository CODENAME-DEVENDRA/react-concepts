import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/connect">
                Connect
            </Link>
            <Link to="/connect/add">
                Add
            </Link>
            <Link to="/connect/edit">
                Edit
            </Link>
        </>
    )
}

export default Navbar