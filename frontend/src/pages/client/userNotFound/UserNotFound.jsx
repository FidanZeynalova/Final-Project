import React from 'react'
import { Helmet } from 'react-helmet'
import notFound from "../../../assets/notFound.png"
import "../userNotFound/userNotFound.css"
import { NavLink } from 'react-router'

function UserNotFound() {
    return (
        <div>
            <Helmet>
                <title>Not Found - Half Baked Harvest</title>
            </Helmet>
            <div className="NotFound">
                <div className="image">
                    <span>4</span> <span><img src={notFound} alt="" /></span> <span>4</span>
                </div>
                <div className="button">
                    <p>The page isn't here, but how about checking out some interesting recipes?</p>
                    <button><NavLink to={"/"} style={{ color: "white" }}>Back To Home</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default UserNotFound
