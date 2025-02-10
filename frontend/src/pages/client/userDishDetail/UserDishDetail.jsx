import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import "../userDishDetail/UserDishDetail.css"
import { ThemeContext } from '../../../context/ThemeContext';

function UserDishDetail() {
    let { light } = useContext(ThemeContext)
    return (
        <div>
            <Helmet>
                <title>Dish Detail - Half Baked Harvest</title>
            </Helmet>
            <div className="UserDishDetail">
                <div className="UserDishDetailContainer">
                    <div className="dish-name" style={{ fontWeight: "bold", fontSize: "35px" }}>
                        Sheet Pan Steak and Chipotle Corn Tacos.
                    </div>
                    <div className="dish-chef">
                        <div className="info">
                            <img src="https://secure.gravatar.com/avatar/49ee4a23a1d5dffb1944da32800bb254?s=48&d=mm&r=pg" alt="" style={{ width: "60px" }} />
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
                            Sheet-Pan Steak and Chipotle Corn Tacos: Roasted flank steak with a homemade taco seasoning mix and sweet yellow corn. Thinly slice the steak and toss it with a deliciously spicy chipotle butter sauce. Then, serve the steak and corn stuffed into warm flour tortillas topped with avocado, cheese, and even more chipotle sauce! These steak tacos come together easily and are so delicious - even better than street tacos!
                        </div>
                        <img src="https://www.halfbakedharvest.com/wp-content/uploads/2024/08/Sheet-Pan-Steak-and-Chipotle-Corn-Tacos-1-scaled.jpg" alt="" />
                        <div className="videoURL">
                            <p style={{ fontWeight: "bold", fontSize: "25px" }}>VIDEOS YOU MAY ALSO LIKE</p>
                            <iframe
                                width="400"
                                height="250"
                                src="https://www.youtube.com/embed/fSuRaYaaUR8"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>

                        </div>
                        <div className="ingredients-card">
                            <div className="ingredients-info">
                                <div className="dish-name">
                                    <h2> Sheet Pan Street Style Steak Tacos</h2>
                                </div>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <div className="author">
                                    <span style={{ fontSize: "30px", fontWeight: "bold" }}>Author: </span><span>Tieghan Gerard</span>
                                    <div className="dish-times">
                                        <span> <p style={{ fontSize: "22px", fontWeight: "bold" }}>Prep Time:</p> <span>15 minutes</span></span>
                                        <span> <p>Cook Time</p> <span>15 minutes</span></span>
                                        <span> <p>Total Time</p> <span>15 minutes</span></span>
                                    </div>
                                    <p className='servings'><span style={{ fontSize: "22px", fontWeight: "bold" }}>Servings:</span><span>6</span></p>
                                    <p className='calories'><span style={{ fontSize: "22px", fontWeight: "bold" }}>Calories Per Serving: </span><span>638 kcal</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDishDetail;
