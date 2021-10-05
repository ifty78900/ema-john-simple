import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
        const {name, img, price, seller, quantity, key} = props.product;
        return (
            <div className='product-container'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1><Link to = {"/product/" + key} style = {{textDecoration: 'none'}}>{name}</Link></h1>
                    <p><small>By: {seller}</small></p>
                    <p>Price: ${price}</p>
                    <p>Item count {quantity}</p>
                </div>
            </div>
        );
        };


export default ReviewItem;