import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

function UserFavorites() {

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
        <title>Favorites Recipes - Half Baked Harvest</title>
    </Helmet>
    <h1>Favorites Recipes </h1>
</div>
  )
}

export default UserFavorites
