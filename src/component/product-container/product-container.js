import React from 'react';
import './product-container.css';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductContainer = (props) => {
    console.log(props.product);
    const cartHandler = props.el;

    const {name, img, price, seller, stock} = props.product;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={()=> cartHandler(props.product)}>
                    <FontAwesomeIcon icon={faCartPlus} /> 
                    Add to cart 
                </button>
            </div>
        </div>
    );
};

export default ProductContainer;