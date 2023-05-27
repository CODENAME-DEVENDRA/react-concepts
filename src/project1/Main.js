import React from 'react'
import { data } from "./data"
import "./style.css"
import ProductList from './ProductList';

function Main() {
    console.log(data);
    return (
        <div className='product-container'>
            {data.map((item, i) => {
                return <ProductList key={item.id} item={item} />
            })}
        </div>
    )
}

export default Main