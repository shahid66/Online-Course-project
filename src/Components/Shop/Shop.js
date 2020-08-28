import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData.slice(0,12);  
    const  [products, setProducts] = useState(first10);
    const[cart, setCart] = useState([]);
    const handaler = (product)=>{
       let neCart=[...cart,product];
       setCart(neCart);
    
    }
    return (
        <div className="product-container ">
            <div className="single-product">
                <h2>Our Online Course</h2>
            {
                products.map(pd =><Product product={pd} handaler={handaler}></Product>)
            }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;