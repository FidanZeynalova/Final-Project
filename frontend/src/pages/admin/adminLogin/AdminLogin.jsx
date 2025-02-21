import "./AdminLogin.css";
import { Helmet } from 'react-helmet';
import Swal from "sweetalert2";
import { NavLink } from 'react-router-dom';  // Corrected import
import { useState } from "react";

function AdminLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [userInput, setUserInput] = useState('');  // Added state for userInput
    const [rememberMe, setRememberMe] = useState(false);  // Added state for rememberMe

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // You should replace 'login' with your actual login API call function
            const response = await login({ email: userInput, password }).unwrap(); 
            if (response.token) {
                localStorage.setItem('token', response.token);
                Swal.fire({
                    icon: "success",
                    title: `Welcome to Half Baked Harvest`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Admin Login - Half Baked Harvest</title>
            </Helmet>
            <div className="AdminLogin">
                <div className="AdminLoginContainer">
                    <form className="AdminLoginForm" onSubmit={handleSubmit}>
                        <div className="loginInput">
                            <label htmlFor="nameOrEmail">Username or Email Address</label>
                            <input 
                                type="text" 
                                id='nameOrEmail'
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="loginInput">
                            <label htmlFor="password">Password</label>
                            <div className="passwordWrapper">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id='password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="togglePassword"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </div>
                        <div className="loginButtonAndCheckbox">
                            <div className="checkbox-input">
                                <input 
                                    type="checkbox" 
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)} 
                                />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                    <div className="LoginInfo">
                        <span><NavLink style={{ color: "black", opacity: ".6" }} to={'lostpassword'}> Lost your password?</NavLink></span>
                        <p><NavLink style={{ color: "black", opacity: ".6" }} to={"/"}>← Go to Half Baked Harvest</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
