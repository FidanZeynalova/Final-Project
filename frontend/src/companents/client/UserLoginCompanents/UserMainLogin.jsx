import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router'
import "../UserLoginCompanents/UserMainLogin.css"

function UserMainLogin({setPage}) {
    return (
        <div>
            <Helmet>
                <title>Login - Half Baked Harvest</title>
            </Helmet>
            <div className="UserLogin">
                <div className="UserLoginContainer">
                    <div className="UserLoginInfo">
                        <h1>Log In</h1>
                        <p>Sign In to your account to see your favorite recipes and shopping lists. <br /><br /> If you have not created an account yet, <NavLink to={"/recipeCollections"} >click here to create a My Recipe Box account</NavLink>. <br /><br />If you do not see the login form below, you are already logged in and can <NavLink>go to your My Recipe Box account now</NavLink>.</p>
                    </div>
                    <form className="UserLoginForm">
                        <div className="input">
                            <label htmlFor="username">UserName or Email <span style={{ color: "red" }}>*</span></label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password<span style={{ color: "red" }}>*</span></label>
                            <input type="password" id="password" />
                        </div>
                        <span>Forgotten your password? <NavLink onClick={() => setPage("forgetPassword")}>Click here</NavLink> to reset it.</span>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserMainLogin
