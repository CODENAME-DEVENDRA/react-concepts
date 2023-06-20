import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ProductError() {

    const error = useRouteError()
    console.log("err", error);

    return (
        <>
            <h1>{error.message}</h1>
            <Link to="/">Go To Homepage</Link>
        </>
    )
}

export default ProductError