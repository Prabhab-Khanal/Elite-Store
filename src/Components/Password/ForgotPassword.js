import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const ForgotPassword = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (code === '1234') {  // Replace with your logic for code verification
            navigate('/reset-password');
        } else {
            setError('Incorrect code. Please try again.');
        }
    };

    const goToLogin = () => {
        navigate('/login'); // Redirect to login page
    };


    return (
        <div>
            <div><Navbar/></div>
            <div className="forgot-password-container">
                <h2>Enter OTP</h2>
                <form onSubmit={handleForgotPassword}>
                    <input
                        type="text"
                        placeholder="Enter Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                    
                    <button type="submit">Submit</button>
                    
                </form>
                
                <button onClick={goToLogin} className="cancel-button">Cancel</button>
                {error && <p className="error">{error}</p>}
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default ForgotPassword;
