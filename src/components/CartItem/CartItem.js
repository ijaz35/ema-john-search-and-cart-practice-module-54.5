import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
    const { cartItem, handlerAddToDelete } = props;
    const { img, name, price, shipping, quantity } = cartItem;
    return (
        <div className='cart-item-container flex border-2 border-gray-300 w-2/3 mx-auto p-2 rounded-lg m-5'>
            <img className='w-24' src={img} alt="" />
            <div className='flex justify-between w-full ml-4'>
                <div>
                    <h3 className='text-lg'>{name}</h3>
                    <p>Price: <span className='text-orange-300'>$ {price}</span> </p>
                    <p>Shipping Charge: <span className='text-orange-300'>$ {shipping}</span> </p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={() => handlerAddToDelete(cartItem)}>
                    <FontAwesomeIcon className='mr-10 text-xl text-red-600 bg-red-200 p-4 rounded-full' icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default CartItem;