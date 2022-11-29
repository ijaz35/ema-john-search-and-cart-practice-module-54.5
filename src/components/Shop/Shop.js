import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getCart } from '../../utilities/storage';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const handlerAddToCart = (selectedProduct) => {

        const exist = cart.find(product => product.id === selectedProduct.id);
        if (exist) {
            const newQuantity = exist.quantity + 1;
            exist.quantity = newQuantity;
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            setCart([...rest, exist])
        } else {

            selectedProduct.quantity = 1;
            setCart([...cart, selectedProduct])
        }

        addToDb(selectedProduct.id);
    }
    const removeCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
        localStorage.removeItem('shopping-cart');
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-3 gap-11 ml-28 mt-48 mr-20">
                {
                    products.map(product => <Shoe
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}></Shoe>)
                }
            </div>
            <div className="bg-orange-200 ">
                <Cart
                    cart={cart}
                    removeCart={removeCart}>
                    <button onClick={() => { navigate('/order') }} className='w-56 flex items-center justify-center py-4 rounded-lg bg-yellow-500 text-white mx-auto'>
                        <p className='mr-4'>Order Review</p>
                        <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;