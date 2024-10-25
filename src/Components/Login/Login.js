import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password123') { // Replace with actual validation
            console.log("Login successful");
            navigate('/dashboard'); // Replace with your main app page
        } else {
            setError('Invalid email or password.');
        }
    };
    const goToRegister = () => {
        navigate('/register'); // Redirect to login page
    };
    return (
        <div>
            <div><Navbar/></div>
            <div className="login-container">
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="forgot-password" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
                <p className="forgot-password" onClick={goToRegister}>Create Account</p>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default Login;
