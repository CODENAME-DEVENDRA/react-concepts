import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiNavbar from '../../components/MuiNavbar'

function RootLayout() {
    return (
        <>
            <MuiNavbar />

            <div style={{ marginTop: "100px" }}>
                <Outlet />
            </div >
        </>
    )
}

export default RootLayout