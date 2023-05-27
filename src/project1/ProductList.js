import React from 'react'

function ProductList({ item }) {
    return (
        <>
            <div className='product-card'>
                <img src={item.thumbnail} width={"200px"} height={"150px"} />
                <h4>{item.title}</h4>
                <p> Price : ${item.price}</p>
                <p>Rating : {item.rating}/5</p>
            </div>
        </>
    )
}

export default ProductList