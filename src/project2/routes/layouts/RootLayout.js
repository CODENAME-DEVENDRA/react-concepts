import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiNavbar from '../../components/MuiNavbar'

function RootLayout() {
    return (
        <>
            <MuiNavbar />
            <Outlet />
        </>
    )
}

export default RootLayout