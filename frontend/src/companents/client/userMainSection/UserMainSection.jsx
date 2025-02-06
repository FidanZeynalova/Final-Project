import React from 'react';
import { NavLink } from 'react-router-dom';
import '../userMainSection/UserMainSection.css';
import main from '../../../assets/main.jpg';
import tacos from '../../../assets/tacos.jpg';
import winterDrink from '../../../assets/winterDrink.jpg';
import healthier from '../../../assets/healthier.jpg';

function UserMainSection() {
  return (
    <div className='MainDish'>
      <div className="MainDishContainer">
        <div className="dishesWrapper">
          <NavLink to={"recipes"}>
            <div className="Dishes">
              <img src={main} alt="main" />
              <div className="text">
                <span>Main Dish</span>
              </div>
            </div>
          </NavLink>
          <NavLink to={"tacosRecipes"}>
            <div className="Dishes">
              <img src={tacos} alt="tacos" />
              <div className="text">
                <span>Tacos</span>
              </div>
            </div>
          </NavLink>
          <NavLink to={"drinkRecipes"}>
            <div className="Dishes">
              <img src={winterDrink} alt="drink" />
              <div className="text">
                <span>Drinks</span>
              </div>
            </div>
          </NavLink>
          <NavLink to={"healthierRecipes"}>
            <div className="Dishes">
              <img src={healthier} alt="healthier" />
              <div className="text">
                <span>Healthier</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default UserMainSection;
