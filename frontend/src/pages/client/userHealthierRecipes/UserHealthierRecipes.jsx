import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeContext } from '../../../context/ThemeContext';
import { useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';
import { NavLink } from 'react-router-dom';

function UserHealthierRecipes() {
      let { light } = useContext(ThemeContext)
      let { data, isLoading } = useGetRecipesQuery()


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
            <div className="UserRecipesMain">
                <div className="UserRecipesMainContainer">
                    <h1>Recipes</h1>

                    <div className="DishCardsWrapper">

                        {
                            isLoading ? (
                                <div class="loader" ></div>
                            ) : (
                                data.map((item) => (
                                    <div className="DishCard" key={item._id}>
                                        <NavLink to={`/recipes/${item._id}`}> <img src={item.img} alt={item.name} /></NavLink>
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
    )
}

export default UserHealthierRecipes
