import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'

function ProductDescription() {

    const { id } = useParams()
    console.log(id);

    const product = data.find((item) => item.id == id)
    console.log(product);
    return (
        <>
            <h1 style={{ margin: "50px" }}>{product.title}</h1>
        </>
    )
}

export default ProductDescription