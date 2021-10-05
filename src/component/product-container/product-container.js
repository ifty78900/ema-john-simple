import React from 'react';
import './product-container.css';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

const ProductContainer = (props) => {
    const cartHandler = props.el;

    const {name, img, price, seller, stock, key} = props.product;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1><Link to = {"/product/" + key} style = {{textDecoration: 'none'}}>{name}</Link></h1>
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                {
                   props.hasAddBtn && <button onClick={()=> cartHandler(props.product)}>
                                            <FontAwesomeIcon icon={faCartPlus} /> 
                                            Add to cart 
                                        </button>
                }   
            </div>
        </div>
    );
};

export default ProductContainer;