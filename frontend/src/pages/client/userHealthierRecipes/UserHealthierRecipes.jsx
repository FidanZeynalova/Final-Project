import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

function UserHealthierRecipes() {


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
    <div>
    <Helmet>
        <title>Healthier Recipes - Half Baked Harvest</title>
    </Helmet>
    <h1>Healthier Recipes </h1>
</div>
  )
}

export default UserHealthierRecipes
