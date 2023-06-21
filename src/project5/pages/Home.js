import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import Category from '../components/Category'

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
            <Category />
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
            </div>
            {products ? <Products products={products} /> : <div>Products Not Found...</div>}
        </>
    )
}

export default Home