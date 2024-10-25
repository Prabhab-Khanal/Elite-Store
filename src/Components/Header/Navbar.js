import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/')}>E-Shop</div>
            <div className="navbar-links">
                <span onClick={() => navigate('/')}>Home</span>
                <span onClick={() => navigate('/shop')}>Shop</span>
                <span onClick={() => navigate('/about')}>About</span>
                <span onClick={() => navigate('/contact')}>Contact</span>
            </div>
            <div className="navbar-icons">
                <FaShoppingCart onClick={() => navigate('/cart')} className="icon" />
                <FaUser onClick={() => navigate('/login')} className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
