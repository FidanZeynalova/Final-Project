import React, { useEffect } from 'react';
import "../userRecipeCollections/UserRecipeCollection.css";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useGetUsersQuery } from '../../../redux/Slices/userSlices';

function UserRecipeCollections() {
  let { data, isLoading } = useGetUsersQuery();

      useEffect(() => {
          const resetPage = () => {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
              });
          }
          resetPage();
      }, []);

  return (
    <>
      <Helmet>
        <title>Recipe Collections - Half Baked Harvest</title>
      </Helmet>
      <div className="UserRecipeCollections">
        <div className="UserRecipeCollectionsContainer">
          {
            isLoading ? (
              <h2>Loading...</h2>
            ) : data?.user ? (
              <h1>Sizin resept kolleksiyanız</h1>
            ) : (
              <>
                <h1>Recipe Collections</h1>
                <p>
                  Want to save recipes? <NavLink to="/register">Create an account</NavLink> or <NavLink to="/login">login</NavLink> on our site and then you can use the “Save To My Collections” button when viewing a recipe to save it here. You can also generate a shopping list from saved recipes in your collections.
                </p>
                <h1>Tutorials</h1>
                <p>
                  <NavLink to="#">How to Save Recipes</NavLink> | <NavLink to="#">How to Meal Plan</NavLink> | <NavLink to="#">How to use Shopping Lists</NavLink>
                </p>
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export default UserRecipeCollections;
