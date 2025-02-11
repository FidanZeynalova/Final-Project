import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserLoginCompanents/UserLostPassword.css"
import { ThemeContext } from '../../../context/ThemeContext'

function UserLostPassword({ setPage }) {
    let { light } = useContext(ThemeContext)
    return (
        <>
            <Helmet>
                <title>Lost Password - Half Baked Harvest</title>
            </Helmet>
            <div className="UserLostPassword">
                <div className="UserLostPasswordContainer">
                    <div className="head" style={{
                        color: light ? "black" : ""
                    }}>
                        <p>Forgot your password? Please enter your username or email address below.
                            We will send you an email with instructions on how to securely reset your password.
                            If you don’t receive the email within a few minutes, please check your spam folder or try again.</p>
                    </div>
                    <form>
                        <div className="input">
                            <label htmlFor="email">Enter E-mail</label>
                            <input type="email" id='email' />
                        </div>
                        <button onClick={() => setPage("confirm")}>Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserLostPassword
