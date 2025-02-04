import React from 'react'
import { NavLink } from 'react-router-dom'
import "../userMainSection/UserMainSection.css"
import main from "../../../assets/main.webp"
import tacos from "../../../assets/tacos.webp"
import winterDrinks from "../../../assets/winterDrinks.webp"
import healthier from "../../../assets/healthier.png"


function UserMainSection() {
    return (
        <div className='MainDish'>
            <div className="MainDishContainer">
                <div className="dishesWrapper">
                    <div className="Dishes">
                        <NavLink to={"recipes"} > <img src={main} alt="main" /></NavLink>
                    </div>
                    <div className="Dishes">
                        <NavLink to={"tacosRecipes"} > <img src={tacos} alt="tacos" /></NavLink>
                    </div>
                    <div className="Dishes">
                        <NavLink to={"drinkRecipes"} > <img src={winterDrinks} alt="drink" /></NavLink>
                    </div>
                    <div className="Dishes">
                        <NavLink to={"healthierRecipes"} > <img src={healthier} alt="healthier" /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserMainSection
