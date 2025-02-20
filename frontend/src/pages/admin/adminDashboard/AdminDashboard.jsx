import React from 'react';
import { Helmet } from 'react-helmet';
import { useGetUsersQuery } from '../../../redux/Slices/userSlices';
import { useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';
import { useGetChefsQuery } from '../../../redux/Slices/chefSlices';
import "../adminDashboard/AdminDashboard.css";

function AdminDashboard() {
  let { data: users, isLoading: usersLoading, error: usersError } = useGetUsersQuery();
  let { data: recipes, isLoading: recipesLoading, error: recipesError } = useGetRecipesQuery();
  let { data: chefs, isLoading: chefsLoading, error: chefsError } = useGetChefsQuery();

  if (usersLoading || recipesLoading || chefsLoading) return <p>Loading...</p>;
  if (usersError || recipesError || chefsError) return <p>Error loading data</p>;

  return (
    <div className="AdminDashboard">
      <Helmet>
        <title>Admin Dashboard - Half Baked Harvest</title>
      </Helmet>
      <div className="AdminDashboardContainer">
        <div className="cards-wrapper">
          <div className="card">
            <span className="card-title">Users Count:</span>
            <span className="card-value">{users?.length || 0}</span>
          </div>
          <div className="card">
            <span className="card-title">Recipes Count:</span>
            <span className="card-value">{recipes?.length || 0}</span>
          </div>
          <div className="card">
            <span className="card-title">Chefs Count:</span>
            <span className="card-value">{chefs?.length || 0}</span>
          </div>
          <div className="card">
            <span className="card-title">Total Dishes:</span>
            <span className="card-value">{recipes?.length || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;