import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../products';
import { addToDb } from '../../utilities/fakedb';
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
        addToDb(product.key);
    }
    return (
        <div className="shop-container">
            <div className="shop-product-container">
                {
                    products.map((product) => {
                        return <ProductContainer product={product} el= {cartHandler} hasAddBtn = {true}></ProductContainer>
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