import React from 'react';
import { Helmet } from 'react-helmet';
import { useGetUsersQuery } from '../../../redux/Slices/userSlices';
import { useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';
import "../adminDashboard/AdminDashboard.css";
import { useGetChefsQuery } from '../../../redux/Slices/chefSlices';

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
        <h2>Admin Dashboard</h2>
        <div className="cards-wrapper">
          <div className="card">
            <h3>User Count</h3>
            <h1>{users?.length || 0}</h1>
          </div>
          <div className="card">
            <h3>Total Recipes Count</h3>
            <h1>{recipes?.length || 0}</h1>
          </div>
          <div className="card">
            <h3>Chef Count</h3>
            <h1>{chefs?.length || 0}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
