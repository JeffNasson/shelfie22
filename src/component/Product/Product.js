import React from 'react'

export default function({name,price,image}){
    console.log(name)
    return(
        <div className='product'>
            <h1>Product</h1>
            <p>{name}</p>
            <p>{price}</p>
            <p>{image}</p>
        </div>
    )
}