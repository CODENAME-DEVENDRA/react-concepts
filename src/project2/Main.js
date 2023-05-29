import React from 'react'
import MuiNavbar from './components/MuiNavbar'
import MuiForm from './components/MuiForm'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

function Main() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Main