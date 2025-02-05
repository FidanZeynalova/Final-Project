import React, { useContext } from 'react'
import CookBook from "../../../assets/CookBook.webp";
import "../UserShopCookBook/UserShopCookBook.css"
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';


function UserShopCookBook() {
    let {light} = useContext(ThemeContext)
    return (
        <div className={`shop-cookbook-section ${light ? "dark-mode" : "light-mode"}`}>
            <div className={`cookbook-container`}>
                <div className="cookbook-image"  >
                    <NavLink to={"cookbook"} > <img src={CookBook} alt="Cookbook Cover" style={{ cursor: "pointer" }} /></NavLink>
                </div>
                <div className="cookbook-details">
                    <h1 className="cookbook-title">AVAILABLE NOW!</h1>
                    <p className="cookbook-name" style={{ fontSize: "30px" }}>Half Baked Harvest Quick & Cozy</p>
                    <span className="cookbook-description" style={{ fontSize: "20px", lineHeight: "1.5" }}    >
                        Join Tieghan Gerard for the exciting launch of her newest cookbook, Half Baked Harvest Quick & Cozy.
                    </span>
                    <div className="cookbook-buttons">
                        <NavLink to={"/cookbook"} > <button className="btn-shop">Shop Cookbooks</button></NavLink>
                        <button className="btn-shop-signed">Shop Signed Cookbook</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default UserShopCookBook
