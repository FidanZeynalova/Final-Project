import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserLoginCompanents/UserNewPassword.css"
import { ThemeContext } from '../../../context/ThemeContext'

function UserNewPassword({ setPage }) {
    let { light } = useContext(ThemeContext)
    return (
        <>
            <Helmet>
                <title>New Password - Half Baked Harvest</title>
            </Helmet>
            <div className="UserNewPassword">
                <div className="UserNewPasswordContainer">
                    <div className='head' style={{
                        color: light ? "black" : ""
                    }}>
                        <p>Please enter your new password below. Make sure it’s strong and unique to keep your account secure.
                            After updating, you’ll be able to log in with your new password.
                        </p>
                    </div>
                    <form>
                        <div className="input">
                            <label htmlFor="newPassword">Enter New Password</label>
                            <input type="password" id='newPassword' />
                        </div>
                        <div className="input">
                            <label htmlFor="newConfirmPassword">Confirm New Password</label>
                            <input type="password" id='newConfirmPassword' />
                        </div>
                        <button onClick={() => setPage("loginMain")}>Submit</button>
                    </form>
                </div>
            </div >

        </>
    )
}

export default UserNewPassword
