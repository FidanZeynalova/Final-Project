import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import "../lostPassword/LostPassword.css"
import { NavLink } from 'react-router'
import axios from 'axios'

function LostPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/password/forgot', { email })
      setMessage(response.data.message)
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }
  }

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
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="email">Username or Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type='submit'>Get New Password</button>
          </form>
          {message && <p>{message}</p>}
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
