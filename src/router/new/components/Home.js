import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
    return (
        <>
            {/* <h1>Home</h1> */}
            <Navbar />
            <Outlet />

        </>
    )
}

export default Home