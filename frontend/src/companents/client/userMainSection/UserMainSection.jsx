import React from 'react'
import { NavLink } from 'react-router-dom'
import "../userMainSection/UserMainSection.css"
import main from "../../../assets/main.jpg"
import tacos from "../../../assets/tacos.jpg"
import winterDrink from "../../../assets/winterDrink.jpg"
import healthier from "../../../assets/healthier.jpg"


function UserMainSection() {
    return (
        <div className='MainDish'>
            <div className="MainDishContainer">
                <div className="dishesWrapper">
                    <NavLink to={"recipes"} > <div className="Dishes" style={{ position: "relative" }}>
                        <img src={main} alt="main" />
                        <div className="text" style={{ position: "absolute", bottom: "0%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#5F5E4A", padding: "10px 20px", color: "#FEFFF4", width: "50%" }}>
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto", fontSize: "20px" }}> Main Dish</span>
                        </div>
                    </div></NavLink>
                    <NavLink to={"tacosRecipes"} > <div className="Dishes" style={{ position: "relative" }}>
                        <img src={tacos} alt="tacos" />
                        <div className="text" style={{ position: "absolute", bottom: "0%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#5F5E4A", padding: "10px 20px", color: "#FEFFF4", width: "50%" }}>
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto", fontSize: "20px" }}> Tacos</span>
                        </div>
                    </div></NavLink>
                    <NavLink to={"drinkRecipes"} >   <div className="Dishes" style={{ position: "relative" }}>
                        <img src={winterDrink} alt="drink" />
                        <div className="text" style={{ position: "absolute", bottom: "0%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#5F5E4A", padding: "10px 20px", color: "#FEFFF4", width: "50%" }}>
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto", fontSize: "20px" }}> Drinks</span>
                        </div>
                    </div></NavLink>
                    <NavLink to={"healthierRecipes"} >
                        <div className="Dishes" style={{ position: "relative" }}>
                            <img src={healthier} alt="healthier" />
                            <div className="text" style={{ position: "absolute", bottom: "0%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#5F5E4A", padding: "10px 20px", color: "#FEFFF4", width: "50%" }}>
                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto", fontSize: "20px" }}>Healthier </span>
                            </div>
                        </div></NavLink>
                </div>
            </div>
        </div >
    )

}

export default UserMainSection
