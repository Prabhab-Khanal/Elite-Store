import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            console.log("Password reset to:", newPassword);
            navigate('/login');
        } else {
            setError('Passwords do not match. Please try again.');
        } 
    };

    const goToLogin = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <div><Navbar/></div>
            <div className="reset-password-container">
                <h2>Reset Password</h2>
                <form onSubmit={handleResetPassword}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Reset Password</button>
                </form>
                <button onClick={goToLogin} className="cancel-button">Cancel</button>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default ResetPassword;
