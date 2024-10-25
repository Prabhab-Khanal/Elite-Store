import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Components/Register/Register';
import VerifyCode from './Components/Verify/VerifyCode';
import Login from './Components/Login/Login';
import ForgotPassword from './Components/Password/ForgotPassword';
import ResetPassword from './Components/Password/ResetPassword';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-code" element={<VerifyCode />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
