import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shoe.css'

const Shoe = (props) => {
    const { product, handlerAddToCart } = props;
    const { img, name, seller, price, ratings, shipping } = product;
    return (
        <div className='product-container relative'>
            <div>
                <img className='w-72  p-3' src={img} alt="" />
            </div>
            <div className="product-info pl-3.5">
                <p className='mt-3 mb-2.5 text-xl font-bold font-sans'>{name}</p>
                <p className='text-sm font-semibold'>Price: $ {price}</p>
                <p className='text-xs mt-12 mb-3'>Manufacturer: {seller}</p>
                <p className='text-xs mb-20'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handlerAddToCart(product)} className='w-full flex items-center justify-center py-4 bg-orange-300 rounded-b-lg absolute bottom-0'>
                <p className='mr-2'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Shoe;