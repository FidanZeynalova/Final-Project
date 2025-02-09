import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import "../userRecipes/UserRecipes.css";
import { NavLink } from "react-router-dom"
import { useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';

function UserRecipes() {
  let {getRecipes} = useGetRecipesQuery()


  const [searchValue, setSearchValue] = useState('');
  const [typeOfMeal, setTypeOfMeal] = useState('');
  const [byMethod, setByMethod] = useState('');
  const [dietSpecific, setDietSpecific] = useState('');
  const [holidays, setHolidays] = useState('');
  const [drinks, setDrinks] = useState('');

  const resetFilters = () => {
    setSearchValue('');
    setTypeOfMeal('');
    setByMethod('');
    setDietSpecific('');
    setHolidays('');
    setDrinks('');
  };

  return (
    <div>
      <Helmet>
        <title>Recipes - Half Baked Harvest</title>
      </Helmet>

      <div className="UserRecipes">
        <div className="UserRecipesContainer">
          <div className="UserRecipesSideBar">
            <div className="head">
              <h1>Filter Recipes</h1>
              <span className="reset-button" onClick={resetFilters}>
                Reset Filters
              </span>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search Recipes..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            <div className="dropdowns">
              <select
                className="dropdown"
                value={typeOfMeal}
                onChange={(e) => setTypeOfMeal(e.target.value)}
              >
                <option value="">Type of Meal</option>
                <option value="Brunch">Brunch</option>
                <option value="Easy Bowls">Easy Bowls</option>
                <option value="Freezer-Friendly">Freezer-Friendly</option>
                <option value="Breakfast">Breakfast</option>
              </select>

              <select
                className="dropdown"
                value={byMethod}
                onChange={(e) => setByMethod(e.target.value)}
              >
                <option value="">By Method</option>
                <option value="Baking">Baking</option>
                <option value="Grilling">Grilling</option>
                <option value="Slow Cooking">Slow Cooking</option>
              </select>

              <select
                className="dropdown"
                value={dietSpecific}
                onChange={(e) => setDietSpecific(e.target.value)}
              >
                <option value="">Diet Specific</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
              </select>

              <select
                className="dropdown"
                value={holidays}
                onChange={(e) => setHolidays(e.target.value)}
              >
                <option value="">Holidays + Seasonal</option>
                <option value="Christmas">Christmas</option>
                <option value="Thanksgiving">Thanksgiving</option>
                <option value="Summer">Summer</option>
              </select>

              <select
                className="dropdown"
                value={drinks}
                onChange={(e) => setDrinks(e.target.value)}
              >
                <option value="">Drinks</option>
                <option value="Christmas Drinks">Christmas Drinks</option>
                <option value="Cocktails">Cocktails</option>
                <option value="Smoothies">Smoothies</option>
              </select>
            </div>
          </div>
          <div className="UserRecipesMain">
            <div className="UserRecipesMainContainer">
              <h1>Recipes</h1>

              <div className="DishCardsWrapper">

                <div className="DishCard">
                  <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt="" />
                  <button>Save Recipes</button>
                  <div className="info">
                    <span><NavLink to={"/recipes"}>Recipes</NavLink></span>
                    <span style={{ opacity: ".8" }}>Feburary 3,2025</span>
                  </div>
                  <p>Spicy Chili Beer Cheese Soup.</p>
                </div>
                <div className="DishCard">
                  <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt="" />
                  <button>Save Recipes</button>
                  <div className="info">
                    <span><NavLink to={"/recipes"}>Recipes</NavLink></span>
                    <span style={{ opacity: ".8" }}>Feburary 3,2025</span>
                  </div>
                  <p>Spicy Chili Beer Cheese Soup.</p>
                </div>
                <div className="DishCard">
                  <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt="" />
                  <button>Save Recipes</button>
                  <div className="info">
                    <span><NavLink to={"/recipes"}>Recipes</NavLink></span>
                    <span style={{ opacity: ".8" }}>Feburary 3,2025</span>
                  </div>
                  <p>Spicy Chili Beer Cheese Soup.</p>
                </div>
                <div className="DishCard">
                  <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt="" />
                  <button>Save Recipes</button>
                  <div className="info">
                    <span><NavLink to={"/recipes"}>Recipes</NavLink></span>
                    <span style={{ opacity: ".8" }}>Feburary 3,2025</span>
                  </div>
                  <p>Spicy Chili Beer Cheese Soup.</p>
                </div>
                <div className="DishCard">
                  <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt="" />
                  <button>Save Recipes</button>
                  <div className="info">
                    <span><NavLink to={"/recipes"}>Recipes</NavLink></span>
                    <span style={{ opacity: ".8" }}>Feburary 3,2025</span>
                  </div>
                  <p>Spicy Chili Beer Cheese Soup.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRecipes;
