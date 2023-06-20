import React, { useEffect, useState } from 'react'
import Products from '../components/Products'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }

        getProducts()

    }, [])


    return (
        <>
            {products && <Products products={products} />}
        </>
    )
}

export default Home