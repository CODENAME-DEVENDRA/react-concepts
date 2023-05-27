import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const nav = [
        { path: "/", title: "Home" },
        { path: "/product", title: "Product" },
        { path: "/contact", title: "Contact-us" },
        { path: "/contact/add", title: "Add" },
    ]

    return (
        <>
            {nav.map((d) => {
                return <Link to={d.path}>{d.title}</Link>
            })}
        </>
    )
}

export default Navbar