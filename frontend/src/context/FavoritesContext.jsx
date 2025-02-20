import React, { createContext, useEffect, useState } from 'react'

export const FavoritesContext = createContext()

function FavoritesContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("favorites"));
    let [favRecipes, setFavRecipes] = useState(local ? local : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favRecipes));
    });

    const value = {
        favRecipes, setFavRecipes
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider
