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
            <h3 id="enroll-course" >Enroll Summary</h3>
            <p >Course ordered: <span className="num" >{cart.length}</span>  </p>
            <p>total course price:  <span className="num" > $ {totalPrice}</span>  </p>
        </div>
    );
};

export default Cart;