import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-about">
                    <h3>About E-Shop</h3>
                    <p>Your one-stop shop for the latest in fashion, electronics, and more.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: xyzyzyzyz</p>
                    <p>Phone: +1111111111</p>
                </div>
            </div>
            <div className="footer-social">
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 E-Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
