import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import "../UserLoginCompanents/UserConfirmPassword.css";
import { LoginUserContext } from '../../../context/LoginUser';
import axios from 'axios';

const validationSchema = yup.object().shape({
    confirmPassword: yup
        .string()
        .matches(/^\d{6}$/, "Code must be exactly 6 digits")
        .required("Please enter the code you received in your email.")
});

function LoginConfirmPassword() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    let { loginUser, emailCode, setEmailCode } = useContext(LoginUserContext); // Burada emailCode-u alırıq

    useEffect(() => {
        const email = loginUser?.userEmail;
        
        if (email) {
            axios.post("http://localhost:5050/users/confirm", { email })
                .then(response => {
                    console.log(response.data.confirmPassword);
                    setEmailCode(response.data.confirmPassword); // Kod kontekstdə saxlanılır
                })
                .catch(error => {
                    console.error("Kod göndərmək mümkün olmadı:", error);
                });
        }
    }, [loginUser, setEmailCode]);

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

                    <Formik
                        initialValues={{ confirmPassword: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values.confirmPassword);
                            if (values.confirmPassword === emailCode) {
                                alert("✅ Kod doğrudur!");
                            } else {
                                alert("❌ Səhv kod daxil edilib!");
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting, values }) => {
                            const isCodeValid = values.confirmPassword.trim().length === 6;
                            setIsButtonDisabled(!isCodeValid);

                            return (
                                <Form>
                                    <div className="input">
                                        <label htmlFor="confirmPassword">Enter the Code</label>
                                        <Field
                                            type="text"
                                            name="confirmPassword"
                                            maxLength={6}
                                            pattern="\d*"
                                            className="inputField"
                                        />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="div"
                                            className="error"
                                            style={{ color: "red" }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isButtonDisabled || isSubmitting}
                                        className="submitButton"
                                        style={{ cursor: isButtonDisabled ? 'not-allowed' : "pointer" }}
                                    >
                                        Submit
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default LoginConfirmPassword;
