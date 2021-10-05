import React from 'react';

const Cart = (props) => {
    const cart = props.add;
    let price = 0, shipping = 0, tax = 0, total = 0, totalWithoutTax = 0;
    cart.forEach((product) =>{
        price += product.price;
        if(price < 100){
            shipping += product.shipping;
        }
        else if(price < 200){
            shipping = 5;
        }
        else if (price > 200){
            shipping = 0;
        }
    })

    tax = price/5;
    totalWithoutTax = price + shipping;
    total = totalWithoutTax + tax;
    return (
        <div>
            <h3>This is cart </h3>
            <p>Cart items: {cart.length}</p>
            <p>Shipping and handling: ${shipping.toFixed(2)}</p>
            <p>Total before tax: ${totalWithoutTax.toFixed(2)}</p>
            <p>Estimated tax: ${tax.toFixed(2)}</p>
            <h3>Order Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;