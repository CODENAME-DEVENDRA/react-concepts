import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Product from './components/Product'
import Add from './components/Add'
import Error from './components/Error'
import ProductDashboard, { productLoader } from './components/ProductDashboard'
import ProductDetails, { productDetailsLoader } from './components/ProductDetails'
import ProductError from './components/ProductError'

function RoutingNew() {

    //method 1 
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Home />,

    //     },
    //     {
    //         path: "/contact",
    //         element: <ContactUs />,
    //         children: [
    //             {
    //                 path: "add",
    //                 element: <Add />
    //             },
    //         ]
    //     },
    //     {
    //         path: "/product",
    //         element: <Product />
    //     },
    // ])

    //method2
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Home />}>

                <Route path='contact' element={<ContactUs />} >
                    <Route path='add' element={<Add />} />
                </Route>

                <Route path='product' element={<Product />} >
                    <Route index loader={productLoader} element={<ProductDashboard />} />
                    <Route path=':id'
                        loader={productDetailsLoader}
                        element={<ProductDetails />}
                        errorElement={<ProductError />}
                    />
                </Route>



                <Route path='*' element={<Error />} />
            </Route>
        )
    )





    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RoutingNew