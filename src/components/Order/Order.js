import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { removeItemFromDb } from '../../utilities/storage';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handlerAddToDelete = (deletedItem) => {
        const restItem = cart.filter(item => item.id !== deletedItem.id);
        setCart(restItem);
        removeItemFromDb(deletedItem.id);
    }
    const removeCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
        localStorage.removeItem('shopping-cart');
    }
    return (
        <div className='shop-container'>
            <div className="order-review-container">
                {
                    cart.map(cartItem => <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        handlerAddToDelete={handlerAddToDelete}
                    ></CartItem>)
                }
            </div>
            <div className="bg-orange-200 ">
                <Cart
                    cart={cart}
                    removeCart={removeCart}>
                    <Link to="/inventory">
                        <button className='w-56 flex items-center justify-center py-4 rounded-lg bg-yellow-500 text-white mx-auto mb-32'>
                            <p className='mr-4'>Proceed checkout</p>
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;