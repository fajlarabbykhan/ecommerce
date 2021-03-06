import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, ratings } = props.product
    // const { handleAddToCart } = props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)} ><p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;