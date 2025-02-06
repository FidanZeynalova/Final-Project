import React from 'react'
import "../userAccount/UserAccount.css"
import { Helmet } from 'react-helmet'
import { NavLink } from "react-router-dom"

function UserAccount() {
    return (
        <div>
            <Helmet>
                <title>Register - Half Baked Harvest</title>
            </Helmet>
            <div className="UserRegister">
                <div className="UserRegisterContainer">
                    <div className="UserRegisterInfo">
                        <h1>Register or Login</h1>
                        <span style={{ fontWeight: "550", fontSize: "25px" }}>Join Today to Start Saving Your Favorite Recipes!</span>
                        <p>Already Registered?</p>
                        <p><NavLink to={"/login"} >Login to your account here.</NavLink></p>
                        <h1>Useful Information</h1>
                        <p><NavLink>How to Save Recipes</NavLink> | <NavLink>How to Meal Plan</NavLink> |
                            <NavLink> How to use Shopping Lists</NavLink> | <NavLink>Adding Ingredients to Target Cart</NavLink></p>
                    </div>
                    <div className="Register">
                        <div className="info">
                            <h1>Don’t Have an Account Yet?</h1>
                            <p>Create a Half Baked Harvest Recipe Box account using the form below to easily save your favorite content, so you never forget a recipe again. Once you save a recipe, you can access it on any device after you login.</p>
                        </div>
                        <form>
                            <div className="nameInput">
                                <div className="input">
                                    <label htmlFor="first">First Name</label>
                                    <input type="text" id="first" />
                                </div>
                                <div className="input">
                                    <label htmlFor="last">Last Name</label>
                                    <input type="text" id="last" />
                                </div>
                            </div>
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' />
                            </div>
                            <div className="passWordInputs">
                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' />
                                </div>
                                <div className="input">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="number" id='confirmPassword' />
                                </div>
                            </div>
                            <button type="submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount
