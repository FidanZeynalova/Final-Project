import React from 'react'
import "../userRecipeCollections/UserRecipeCollection.css"
import { NavLink } from "react-router"
import { Helmet } from 'react-helmet'

function UserRecipeCollections() {
  return (
    <>
      <Helmet>
        <title>Recipe Collections - Half Baked Harvest</title>
      </Helmet>
      <div className="UserRecipeCollections">
        <div className="UserRecipeCollectionsContainer">
          <h1>Recipe Collections</h1>
          <p>Want to save recipes? <NavLink to={"/register"} >Create an account</NavLink> or <NavLink to={"/login"}>login</NavLink> on our site and then you can use the “Save To My Collections” button when viewing a recipe to save it here. You can also generate a shopping list from saved recipes in your collections.</p>
          <h1>Tutorials</h1>
          <p><NavLink>How to Save Recipes</NavLink> | <NavLink>How to Meal Plan </NavLink>| <NavLink>How to use Shopping Lists</NavLink></p>
        </div>
      </div>
    </>
  )
}

export default UserRecipeCollections
