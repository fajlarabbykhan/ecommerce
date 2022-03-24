import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <a href="#">Home</a>
                <a href="#">Orders</a>
                <a href="#">Inventory</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
};

export default Header;