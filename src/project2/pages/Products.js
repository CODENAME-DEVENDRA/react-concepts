import React from 'react'
import { data } from '../data/data'
import ProductList from '../components/ProductList'

function Products() {
    return (
        <>
            {data?.map((product) => {
                return <ProductList product={product} />
            })}
        </>
    )
}

export default Products