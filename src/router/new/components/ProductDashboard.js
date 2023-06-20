import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function ProductDashboard() {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <h1>ProductDashboard</h1>
            {data.products.map((item) => {
                return <Link key={item.id} to={item.id.toString()}>
                    <h1>{item.title}</h1>
                </Link>
            })}
        </div>
    )
}

export default ProductDashboard


export const productLoader = async () => {
    const res = await fetch(`https://dummyjson.com/products`)
    return res.json()
}