import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function ProductList({ product }) {
    return (

        <div style={{ display: "flex", flexWrap: "nowrap", gap: "20px" }}>
            <Link to={`${product.id}`}>
                <Card variant="outlined">
                    <img src={product.thumbnail} />
                    <h1>{product.title}</h1>
                    <h1>Rating: {product.rating}</h1>
                    <h1>Price: {product.price}</h1>
                </Card>
            </Link>
        </div>

    )
}

export default ProductList