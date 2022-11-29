import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {

    return (
        <div className='header-container flex  p-5 items-center justify-between px-20'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav >
                <Link className='no-underline text-white mr-6' to="/">Home</Link>
                <Link className='no-underline text-white mr-6' to="/shop">Shop</Link>
                <Link className='no-underline text-white mr-6' to="/order">Order Review</Link>
                <Link className='no-underline text-white mr-6' to="/inventory">Manage Inventory</Link>
                <Link className='no-underline text-white mr-6' to="/signup">Sign Up</Link>
            </nav>
        </div>

    );
};

export default Header;