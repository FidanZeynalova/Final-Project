import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import {
  useDeleteRecipeByIdMutation,
  useGetRecipesQuery,
} from '../../../redux/Slices/recipesSlices';
import '../adminRecipes/AdminRecipes.css';

function AdminRecipes() {
  const { data, isLoading, refetch } = useGetRecipesQuery();
  const [deleteRecipeById] = useDeleteRecipeByIdMutation();

  const handleDelete = async (id) => {
    await deleteRecipeById(id);
    refetch();
  };

  return (
    <div>
      <Helmet>
        <title>Admin Recipes - Half Baked Harvest</title>
      </Helmet>
      <div className="AdminRecipes">
        <div className="AdminRecipesContainer">
          <table>
            <thead>
              <tr>
                <th>Dish Image</th>
                <th>Dish Name</th>
                <th>Author</th>
                <th>Prep time</th>
                <th>Cook time</th>
                <th>Total time</th>
                <th>Servings</th>
                <th>Calories per serving</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="12" style={{ textAlign: 'center' }}>
                    <h1>...Loading</h1>
                  </td>
                </tr>
              ) : data.length === 0 || !data ? (
                <tr>
                  <td colSpan="12" style={{ textAlign: 'center' }}>
                    <h2>No Data Available</h2>
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item._id}>
                    <td style={{ width: '100px', height: '100px' }}>
                      <NavLink to={`${item._id}`}>
                        <img
                          src={item.img}
                          alt={item.dish}
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      </NavLink>
                    </td>
                    <td>{item.dish}</td>
                    <td>by {item.chefById}</td>
                    <td>{item.prepTime} minutes</td>
                    <td>{item.cookingTime} minutes</td>
                    <td>{item.totalTime} minutes</td>
                    <td>{item.servings}</td>
                    <td>{item.calories} kcal</td>
                    <td>{item.ingredients}</td>
                    <td>{item.instructions}</td>
                    <td>
                      <button className="edit-button">
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(item._id)}>
                        <FaDeleteLeft />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminRecipes;
