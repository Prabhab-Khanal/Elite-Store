import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate a registration API call and redirect
        console.log("Registered with:", { name, email, password });
        navigate('/verify-code');
    };
    const goToLogin = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <div><Navbar/></div>
            
            <div className="register-container">
                
                <h2>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <button type="submit">Register</button>

                </form>
                <p className="forgot-password" onClick={goToLogin}>Already have an account? Login</p>
            
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default Register;
