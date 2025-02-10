import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import "../userRecipes/UserRecipes.css";
import { NavLink } from "react-router-dom"
import { useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';
import { ThemeContext } from '../../../context/ThemeContext';

function UserRecipes() {
  let { light } = useContext(ThemeContext)
  let { data, isLoading } = useGetRecipesQuery()



  return (
    <div>
      <Helmet>
        <title>Recipes - Half Baked Harvest</title>
      </Helmet>

      <div className="UserRecipes">
        <div className="UserRecipesContainer">
          <div className="UserRecipesSideBar" style={{
            color: light ? "white" : "#4c4c34",
            backgroundColor: light ? "#272a2e" : "white",
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          }}  >
            <div className="head" >
              <h1>Filter Recipes</h1>
              <span className="reset-button" style={{ color: light ? "white" : "#4c4c34" }}>
                Reset Filters
              </span>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search Recipes..."
              />
            </div>

            <div className="dropdowns">
              <select
                className="dropdown" style={{
                  backgroundColor: light ? "#383d42 " : "#4c4c34"
                }}
              >
                <option value="">Type of Meal</option>
                <option value="Brunch">Brunch</option>
                <option value="Easy Bowls">Easy Bowls</option>
                <option value="Freezer-Friendly">Freezer-Friendly</option>
                <option value="Breakfast">Breakfast</option>
              </select>

              <select
                className="dropdown" style={{
                  backgroundColor: light ? "#383d42 " : "#4c4c34"
                }}
              >
                <option value="">By Method</option>
                <option value="Baking">Baking</option>
                <option value="Grilling">Grilling</option>
                <option value="Slow Cooking">Slow Cooking</option>
              </select>

              <select
                className="dropdown" style={{
                  backgroundColor: light ? "#383d42 " : "#4c4c34"
                }}
              >
                <option value="">Diet Specific</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
              </select>

              <select
                className="dropdown" style={{
                  backgroundColor: light ? "#383d42 " : "#4c4c34"
                }}
              >
                <option value="">Holidays + Seasonal</option>
                <option value="Christmas">Christmas</option>
                <option value="Thanksgiving">Thanksgiving</option>
                <option value="Summer">Summer</option>
              </select>

              <select
                className="dropdown" style={{
                  backgroundColor: light ? "#383d42 " : "#4c4c34"
                }}
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

                {
                  isLoading ? (
                    <h1>...Loading</h1>
                  ) : (
                    data.map((item) => (
                      <div className="DishCard" key={item._id}>
                        <img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/Spicy-Chili-Beer-Cheese-Soup-1-340x510.jpg" alt={item.name} />
                        <button style={{
                          color: light ? "white" : "#4c4c34",
                          border: light ? "1px solid white" : "1px solid rgba(60, 60, 42, 0.54)"
                        }}>Save Recipes</button>
                        <div className="info">
                          <span><NavLink to={"/recipes"} style={{ color: light ? "white" : "#4c4c34 ", cursor: "pointer" }}>Recipes</NavLink></span>
                          <span style={{ opacity: ".8" }}>{item.createdAt}</span>
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>{item.dish}</p>
                      </div>
                    ))
                  )

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRecipes;
