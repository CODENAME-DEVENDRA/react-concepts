import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'

function CategoryPage() {

    const { type } = useParams()
    const [category, setCategory] = useState([])

    useEffect(() => {
        const getCategory = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${type}`)
            const data = await response.json()
            setCategory(data)
        }
        getCategory()
    }, [])


    return (
        <>
            {category && <Products products={category} />}
        </>
    )
}

export default CategoryPage