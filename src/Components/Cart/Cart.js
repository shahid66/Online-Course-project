import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = (props) => {
    const cart =props.cart;
    const totalPrice = cart.reduce((total,cart)=>total+cart.price,0);
    const grandPrice =(totalPrice).toFixed(2);
    
    return (
        <div className="cartBody" >
             <div className="card text-white bg-success " >
                <div className="card-header">Course Enroll Summary</div>
                    <div className="card-body">
                        <h5 className="card-title">Total Course Order: {cart.length}</h5>
                        <p className="card-text text-warning">Total Price: {grandPrice}</p>
                    </div>
            </div>
        </div>           
            

    );
};

export default Cart;