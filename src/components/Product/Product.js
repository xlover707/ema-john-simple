import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    console.log(props)
    return (
            <div className="product">
                <div>
                    <img src= {img} alt="" srcset=""/>
                </div>

                <div>
                    <h4 className="product-name"> {name} </h4>
                    <br/>
                    <p><small>by: {seller} </small></p>
                    <p>${price} </p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    
                    <button className="btn-addCart"
                        onClick = {props.handleAddProduct}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                         add to cart</button>
                </div>
        </div>
    );
};

export default Product;