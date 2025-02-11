import React from 'react'
import { Helmet } from 'react-helmet'
import "../UserLoginCompanents/UserConfirmPassword.css"

function UserConfirmPassword({ setPage }) {
    return (
        <>
            <Helmet>
                <title>
                    Confirm Password - Half Baked Harvest
                </title>
            </Helmet>
            <div className="UserConfirmPassword">
                <div className="UserConfirmPasswordContainer">
                    <div className="head">
                        <p> Please enter the code you received in your email below.
                            This is required to set your new password and secure your account.
                        </p>
                    </div>
                    <form>
                        <div className="input">
                            <label htmlFor="confirm">Enter  Confirm Code</label>
                            <input type="number" name="confirm" id="confirm" />
                        </div>
                        <button onClick={() => setPage("newPassword")}>Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default UserConfirmPassword
