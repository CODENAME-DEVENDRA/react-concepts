import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function ProductDetails() {

    const { id } = useParams()
    console.log(id);

    const data = useLoaderData()

    return (
        <div>
            <h1>ProductDashboard</h1>
            {[data].map((item) => {
                return <h1>{item.title}</h1>
            })}
        </div>
    )
}

export default ProductDetails


export const productDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    // console.log("details", res);

    if (!res.ok) {
        throw Error("Page Not Found")
    }

    return res.json()
}