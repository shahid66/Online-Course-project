import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import {Button} from 'react-bootstrap';


const Product = (props) => {
    
    const{name,img,price,instructor}=props.product;
    return (
        
            
            <div className="product">
                <div>
                    <img style={{width:"250px",height:"300px"}} src={img} alt=""/>
                </div>
                <div className="product-text">
                    <h2 className="text-warning">Course Name : <span className="text-primary">{name}</span></h2>
                    <p><small>Instructor : {instructor}</small></p>
                    <p>Price : ${price}</p>
                    
                    <Button className="btn btn-danger bt" onClick={()=>props.handaler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</Button>
                </div>
            </div>

            
        
    );
};

export default Product;