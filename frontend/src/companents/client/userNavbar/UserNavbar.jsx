import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from '../../../context/ThemeContext';
import logo from "../../../assets/logo.svg"
import "../userNavbar/UserNavbar.css"


function UserNavbar() {
    let [isOpen, seIsOpen] = useState(false)
    let [menu, setMenu] = useState(false)
    let { light, setLight } = useContext(ThemeContext)
    return (
        <div className="Navbar" style={{backgroundColor: light ? "#0F1620" : "#fefff4"}}>
            <div className="navbarContainer">
                <div className="navbarLogo">
                    <NavLink to="/" className="navbarLogo">
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </NavLink>
                </div>
                <div className="nav-list">
                    <ul className='navbarList'>
                        <li><NavLink to="/" style={({ isActive }) => ({
                            color: isActive ? "#5F5E4A" : "var(--text-color)"
                        })}>Home</NavLink></li>
                        <li><NavLink to="subscribe" style={({ isActive }) => ({
                            color: isActive ? "#5F5E4A" : "var(--text-color)"
                        })}>News Letter</NavLink></li>
                        <li><NavLink to="recipeCollections" style={({ isActive }) => ({
                            color: isActive ? "#5F5E4A" : "var(--text-color)"
                        })}>My Recipe Box</NavLink></li>
                        <li onClick={() => seIsOpen(!isOpen)} className='barLinks'>
                            <FaBars />
                            {
                                isOpen && (
                                    <ul className='navbarBarsList'>
                                        <li>
                                            <NavLink to="recipes" style={({ isActive }) => {
                                                return isActive ? { color: "plum" } : { color: "white" };
                                            }}>
                                                Recipes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="favorites" style={({ isActive }) => {
                                                return isActive ? { color: "plum" } : { color: "white" };
                                            }}>
                                                Favorites()
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="subscribe" style={({ isActive }) => {
                                                return isActive ? { color: "plum" } : { color: "white" };
                                            }}>
                                                Subscribe
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="login" style={({ isActive }) => {
                                                return isActive ? { color: "plum" } : { color: "white" };
                                            }}>
                                                Log in to your account
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="register" style={({ isActive }) => {
                                                return isActive ? { color: "plum" } : { color: "white" };
                                            }}>
                                                Create Account
                                            </NavLink>
                                        </li>
                                    </ul>

                                )
                            }
                        </li>
                    </ul>
                    <div className="dark-light">
                        <button
                            onClick={() => setLight(!light)}
                            style={{
                                backgroundColor: light ? "var(--bg-color)" : "var(--text-color)",
                                color: light ? "var(--text-color)" : "var(--bg-color)",
                                border: "1px solid var(--text-color)",
                                padding: "8px",
                                borderRadius: "5px"
                            }}
                        >
                            {light ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                    <div className="barsIcons" style={{ position: "relative", display: "none" }}>
                        <button
                            onClick={() => setMenu(!menu)}
                            style={{
                                backgroundColor: light ? "var(--bg-color)" : "var(--text-color)",
                                color: light ? "var(--text-color)" : "var(--bg-color)",
                                border: "1px solid var(--text-color)",
                                padding: "8px",
                                borderRadius: "5px"
                            }}
                        >
                            <FaBars />
                        </button>
                        {menu && (
                            <ul className="menu" style={{ position: "absolute", top: "20px", left: "0", backgroundColor: "#1c1c16", borderRadius: "5px", padding: "5px", width: "80px" }}>
                                <li><NavLink to="/" style={({ isActive }) => {
                                    return isActive ? { color: "plum" } : { color: "white" };
                                }}>Home</NavLink></li>
                                <li><NavLink to="recipe-collections" style={({ isActive }) => {
                                    return isActive ? { color: "plum" } : { color: "white" };
                                }}>My Recipe Box</NavLink></li>
                                <li>
                                    <NavLink to="recipes" style={({ isActive }) => {
                                        return isActive ? { color: "plum" } : { color: "white" };
                                    }}>
                                        Recipes
                                    </NavLink>
                                </li>
                                <li><NavLink to="favorites" style={({ isActive }) => {
                                    return isActive ? { color: "plum" } : { color: "white" };
                                }}>Favorites()</NavLink></li>
                                <li>
                                    <NavLink to="newsLetter" style={({ isActive }) => {
                                        return isActive ? { color: "plum" } : { color: "white" };
                                    }}>
                                        Subscribe
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="login" style={({ isActive }) => {
                                        return isActive ? { color: "plum" } : { color: "white" };
                                    }}>
                                        Log in to your account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="register" style={({ isActive }) => {
                                        return isActive ? { color: "plum" } : { color: "white" };
                                    }}>
                                        Create Account
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>


                </div>
            </div>
        </div >
    )
}

export default UserNavbar
