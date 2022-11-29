import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart, removeCart } = props;

    // console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart-container sticky top-0'>
            <h2 className='text-center font-semibold text-xl mt-7 mb-12'>Order Summary</h2>
            <div className='pl-6'>
                <p className=''>Selected items:{quantity} </p>
                <p className='my-6'>Total price: $ {totalPrice}</p>
                <p className=''>Total shopping charge: $ {shipping}</p>
                <p className='my-6'>Tax: ${tax.toFixed(2)}</p>
                <h2 className=' font-semibold text-lg mt-7 mb-12'>Grand Total: $ {grandTotal.toFixed(2)}</h2>
            </div>
            <button onClick={removeCart} className='w-56 flex items-center justify-center py-4 rounded-lg bg-red-500 text-white mx-auto mb-4'>
                <p className='mr-4'>Clear cart</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            {props.children}

        </div>
    );
};

export default Cart;