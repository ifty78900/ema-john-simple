import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../products';
import { getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const CartReview = (props) => {
    let[cart, setCart] = useState([]);
    useEffect(() => {
        const products = getStoredCart();
        let productKeys = Object.keys(products);// Object.keys returns an array containing the keys of a certain object
        const cartProducts = productKeys.map((key) => {
            const cartProduct = fakeData.find(pd => pd.key === key); // Array.find returns the value of the first element in the provided array that satisfies the provided testing function
            cartProduct.quantity = products[key]; // If we use a object with the key in third brackets it returns the value of that key value pair
            return cartProduct;
        });
        setCart(cartProducts);
        //Array.filter returns an array containing the matched values of the given array
    }, [])
    // const cartArrays = fakeData.filter()
    
    return (
        <div>
           <h1>
               
           </h1>
           {
            cart.map((pd) => <ReviewItem product={pd}></ReviewItem>)  // Foreach and map are different. Map creates an array of the return values whereas foreach or any other loop does not do that.
           }
        </div>
    );
};

export default CartReview;