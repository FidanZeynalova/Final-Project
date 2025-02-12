import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import "../UserLoginCompanents/UserConfirmPassword.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    code: yup
        .string()
        .matches(/^\d{6}$/, "Code must be exactly 6 digits")
        .required("Please enter the code you received in your email.")
});

function UserConfirmPassword({ setPage }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const variabledidene = "123456"; // Test üçün 6 rəqəmli kod

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

                    {/* Formik formu */}
                    <Formik
                        initialValues={{ code: "" }}
                        validationSchema={validationSchema} onSubmit={async (values, { setSubmitting }) => {
                            if (values.code === variabledidene) {
                                setPage("newPassword"); // Yeni şifrə səhifəsinə keçid
                            } else {
                                alert("Incorrect code");
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting, values }) => {
                            // Buttonu aktiv edib deaktiv etmək üçün kodun uzunluğunu yoxlamag
                            const isCodeValid = values.code.trim().length === 6;
                            setIsButtonDisabled(!isCodeValid);

                            return (
                                <Form>
                                    {/* Code input */}
                                    <div className="input">
                                        <label htmlFor="code">Enter the Code</label>
                                        <Field
                                            type="text"
                                            name="code"
                                            maxLength={6} // 6 simvolu limitləmək
                                            pattern="\d*"  // Rəqəm daxil edilməsini üçün
                                            className="inputField"
                                        />
                                        <ErrorMessage
                                            name="code"
                                            component="div"
                                            className="error"
                                            style={{ color: "red" }}
                                        />
                                    </div>

                                    {/* Submit Button */}
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

export default UserConfirmPassword;
