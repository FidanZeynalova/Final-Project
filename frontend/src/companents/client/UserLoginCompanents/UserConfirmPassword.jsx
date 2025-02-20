import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import "../UserLoginCompanents/UserConfirmPassword.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object().shape({
    code: yup
        .string()
        .matches(/^\d{6}$/, "Code must be exactly 6 digits")
        .required("Please enter the code you received in your email.")
});

function UserConfirmPassword({ setPage }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/password/verify', { email, confirmCode: code });
            setMessage(response.data.message);
            if (response.data.message === "Code is correct, you can set a new password") {
                setPage("newPassword");
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Helmet>
                <title>Confirm Password - Half Baked Harvest</title>
            </Helmet>
            <div className="UserConfirmPassword">
                <div className="UserConfirmPasswordContainer">
                    <div className="head">
                        <p>
                            Please enter the 6-digit code you received in your email below.
                            This is required to set your new password and secure your account.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="code">Enter the Code</label>
                            <input
                                type="text"
                                name="code"
                                maxLength={6}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            Submit
                        </button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </>
    );
}

export default UserConfirmPassword;
