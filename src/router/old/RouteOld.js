import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import SignIn from './SignIn'
import "./routeOldStyles.css"
import Navbar from './Navbar'
import Connect from './Connect'
import Add from './Add'
import Edit from './Edit'

function RouteOld() {
    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/connect" element={<Connect />} >
                        <Route path='add' element={<Add />} />
                        <Route path='edit' element={<Edit />} />
                    </Route>
                </Routes>

            </Router>
        </>
    )
}

export default RouteOld

