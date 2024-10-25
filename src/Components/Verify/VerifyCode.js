import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerifyCode.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const VerifyCode = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleVerify = (e) => {
        e.preventDefault();
        if (code === '1234') {  // Replace with your logic for verification
            navigate('/login');
        } else {
            setError('Incorrect code. Please try again.');
        }
    };

    const goToRegister = () => {
        navigate('/register'); // Redirect to login page
    };

    return (
        <div>
            <div><Navbar/></div>
            <div className="verify-container">
                <h2>Enter Verification Code</h2>
                <form onSubmit={handleVerify}>
                    <input
                        type="text"
                        placeholder="Enter Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                    <button type="submit">Verify Code</button>
                </form>
                {error && <p className="error">{error}</p>}
                <button onClick={goToRegister} className="cancel-button">Cancel</button>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default VerifyCode;
