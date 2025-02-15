import React from 'react'
import { Helmet } from 'react-helmet'
import "../adminRecipes/AdminRecipes.css"
import { NavLink } from 'react-router'
import { useDeleteRecipeByIdMutation, useGetRecipesQuery } from '../../../redux/Slices/recipesSlices'
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

function AdminRecipes() {
  let { data, isLoading, refetch } = useGetRecipesQuery()
  let [deleteRecipeById] = useDeleteRecipeByIdMutation()


  async function handleDelete(id) {
    await deleteRecipeById(id)
    refetch()
  }

  return (
    <div>
      <Helmet>
        <title>Admin Recipes - Half Baked Harvest</title>
      </Helmet>
      <div className="AdminRecipes">
        <div className="AdminRecipesContainer">
          <table>
            <tr>
              <th>Dish Image</th>
              <th>Dish Name</th>
              <th>Author</th>
              <th>Prep time</th>
              <th>Cook time</th>
              <th>Total time</th>
              <th>Servings</th>
              <th>Calories per serving</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {
              isLoading ? (
                <h1>...Loading</h1>
              ) : (
                data.map((item) => (
                  <tr key={item._id}>
                    <td style={{ width: "100px", height: "100px" }}><NavLink to={":id"}><img src="https://www.halfbakedharvest.com/wp-content/uploads/2025/02/2-1-340x510.png" alt="" /></NavLink></td>
                    <td>{item.dish}</td>
                    <td>by {item.chefById}</td>
                    <td>{item.prepTime} minutes </td>
                    <td>{item.cookingTime} minutes </td>
                    <td>{item.totalTime} minutes </td>
                    <td> {item.servings} </td>
                    <td>  {item.calories} kcal </td>
                    <td><button style={{ fontSize: "25px", border: "1px solid #5f5e4a", borderRadius: "5px", padding: "5px" }}><FaEdit style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto" }} /></button></td>
                    <td><button style={{ fontSize: "25px", border: "1px solid #5f5e4a", borderRadius: "5px", padding: "5px" }} onClick={() => handleDelete(item._id)}><FaDeleteLeft style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px auto" }} /></button></td>
                  </tr>
                ))
              )
            }
          </table>
        
        </div>
      </div>
    </div>
  )
}

export default AdminRecipes
