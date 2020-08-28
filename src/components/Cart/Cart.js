import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

    // let totalPrice = cart.redeuce((total, crd) => total + crd.price, 0)

    let totalPrice = 0;
    for(let i=0; i < cart.length; i++){
        const course = cart[i];
        totalPrice = totalPrice + course.price;
    }

    return (
        <div className="enroll">
            <h3>Enroll Summary</h3>
            <p>Course ordered: {cart.length} </p>
            <p>Number of course added: </p>
        </div>
    );
};

export default Cart;