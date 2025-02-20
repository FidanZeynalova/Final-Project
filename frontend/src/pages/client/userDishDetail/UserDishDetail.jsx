import React, { useContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "../userDishDetail/UserDishDetail.css"
import { ThemeContext } from '../../../context/ThemeContext';
import { useParams } from 'react-router';
import { useGetRecipeByIdQuery } from '../../../redux/Slices/recipesSlices';

function UserDishDetail() {
    let { light } = useContext(ThemeContext)
    let { id } = useParams()
    let { data, isLoading } = useGetRecipeByIdQuery(id)


    useEffect(() => {
        const resetPage = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        resetPage();
    }, []);

    const getVideoId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <div>
            <Helmet>
                <title>Dish Detail - Half Baked Harvest</title>
            </Helmet>
            <div className="UserDishDetail">
                {
                    isLoading ? (
                        <h1>...Loading</h1>
                    ) : (
                        <div className="UserDishDetailContainer">
                            <div className="dish-name" style={{ fontWeight: "bold", fontSize: "35px" }}>
                                {data.dish}
                            </div>
                            <div className="dish-chef">
                                <div className="info">
                                    <img src={"https://secure.gravatar.com/avatar/49ee4a23a1d5dffb1944da32800bb254?s=48&d=mm&r=pg"} alt="" style={{ width: "60px" }} />
                                    <div className="text">
                                        <span style={{
                                            color: light ? "white" : "#4C4A35",
                                            fontWeight: "bold",
                                            fontSize: "20px", borderBottom: light ? "2px solid white" : "2px solid #4C4A35",
                                            cursor: "pointer"
                                        }}>by Tieghan</span>
                                        <span style={{ opacity: ".8" }}>Feb 10, 2025</span>
                                    </div>
                                </div>
                                <div className="btns">
                                    <button style={{
                                        border: light ? "1px solid white" : "1px solid #4c4a3593",
                                        color: light ? "white" : "#4C4A35"
                                    }}>Skip to Recipe</button>
                                    <button style={{
                                        border: light ? "1px solid white" : "1px solid #4c4a3593",
                                        color: light ? "white" : "#4C4A35"
                                    }}>Save Recipe</button>
                                </div>
                            </div>

                            <div className="DetailMain">
                                <div className="text">
                                    {data.instructions}
                                </div>
                                <img src={data.img} alt={data.dish} style={{ width: "400px", height: "400px" }} />
                                <div className="videoURL">
                                    <p style={{ fontWeight: "bold", fontSize: "25px" }}>RECIPE VIDEO</p>
                                    {data.videoUrl ? (
                                        <iframe
                                            width="400"
                                            height="250"
                                            src={data.videoUrl}
                                            title={data.dish}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    ) : (
                                        <p>No video available for this recipe</p>
                                    )}
                                </div>
                                <div className="ingredients-card" style={{
                                    backgroundColor: light ? "#272a2e" : "#F7F6F3",
                                }}>
                                    <div className="ingredients-info">
                                        <div className="dish-name">
                                            <h2> {data.dish}</h2>
                                        </div>
                                        <div className="rating">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="author">
                                            <span style={{ fontSize: "30px", fontWeight: "bold" }}>Author: </span><span>Tieghan Gerard</span>
                                            <div className="dish-times">
                                                <span> <p style={{ fontSize: "18px", fontWeight: "bold" }}>Prep Time:</p> <span>{data.prepTime} minutes</span></span>
                                                <span> <p style={{ fontSize: "18px", fontWeight: "bold" }}>Cook Time:</p> <span>{data.cookingTime} minutes</span></span>
                                                <span> <p style={{ fontSize: "18px", fontWeight: "bold" }}>Total Time:</p> <span>{data.totalTime} minutes</span></span>
                                            </div>
                                            <p className='servings'><span style={{ fontSize: "22px", fontWeight: "bold" }}>Servings:</span><span>{data.servings}</span></p>
                                            <p className='calories'><span style={{ fontSize: "22px", fontWeight: "bold" }}>Calories Per Serving: </span><span>{data.calories} kcal</span></p>
                                            <h2>Ingredients</h2>
                                            <span>{data.ingredients}</span>
                                            <h2>instructions</h2>
                                            <span>{data.instructions}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default UserDishDetail;
