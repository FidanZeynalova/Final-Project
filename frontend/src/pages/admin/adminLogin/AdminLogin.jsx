import "../adminLogin/AdminLogin.css"
import { Helmet } from 'react-helmet'
import { RememberMeContext } from '../../../context/RememberMe';
import Swal from "sweetalert2"
import { NavLink } from 'react-router';
import { useContext, useState } from "react";


function AdminLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { username, login } = useContext
    (RememberMeContext);
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [userInput, setUserInput] = useState(username);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    function handleSubmit(e) {
        e.preventDefault();
        login(userInput, rememberMe);
        Swal.fire({
            icon: "success",
            title: `Welcome ${username} Half Baked Harvest`,
            showConfirmButton: false,
            timer: 1500
        });
    }

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
                            <input type="text" id='nameOrEmail'
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)} required />
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
                                    {passwordVisible ? '🙈  ' : '👁️'}
                                </button>
                            </div>
                        </div>
                        <div className="loginButtonAndCheckbox">
                            <div className="checkbox-input">
                                <input type="checkbox" id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)} />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <button type="submit">Log In</button>
                        </div>
                    </form>
        <div className="LoginInfo">
            <span><NavLink style={{color:"black",opacity:".6"}}> Lost your password?</NavLink></span>
            <p><NavLink style={{color:"black",opacity:".6"}}>← Go to Half Baked Harvest</NavLink></p>
        </div>

      
                </div>
            </div>
        </>
    )
}

export default AdminLogin  