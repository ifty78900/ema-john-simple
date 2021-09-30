import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../products';
import Cart from '../cart/cart';
import ProductContainer from '../product-container/product-container';
import "./Products.css";

function Products() {

    const [products, setproducts] = useState(fakeData);
    const [cart, setCart] = useState([]);
    //We have to add event listener function where the main state of that property is
    
    const cartHandler = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="shop-product-container">
                {
                    products.map((product) => {
                        return <ProductContainer product={product} el= {cartHandler}></ProductContainer>
                    })
                }
            </div>
            <div>
                <Cart add={cart}></Cart>
            </div>
        </div>
    );
}

export default Products;