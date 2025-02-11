import React from 'react'
import { Helmet } from 'react-helmet'
import "../lostPassword/LostPassword.css"
import { NavLink } from 'react-router'

function LostPassword() {
  return (
    <>
      <Helmet>
        <title>Lost Password - Half Baked Harvest</title>
      </Helmet>
      <div className="LostPassword">
        <div className="LostPasswordContainer">
          <div className="head">
            <p>Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>
          </div>
          <form>
            <div className="input">
              <label htmlFor="name">Username or Email Address</label>
              <input type="text" name="name" id="name" />
            </div>
            <button type='submit'>Get New Password</button>
          </form>
          <div className="footer">
            <p><NavLink to={"/admin"} style={{ color: "black", opacity: ".6" }}>← Log In</NavLink></p>
            <p><NavLink style={{ color: "black", opacity: ".6" }} to={"/"}>← Go to Half Baked Harvest</NavLink></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default LostPassword
