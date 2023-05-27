import React from 'react'
import { Outlet } from 'react-router-dom'

function ContactUs() {
    return (
        <div>
            <h1>ContactUs</h1>
            <Outlet />
        </div>
    )
}

export default ContactUs