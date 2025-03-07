import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import "../UserLoginCompanents/UserConfirmPassword.css";
import { useConfirmPasswordUserMutation } from '../../../redux/Slices/userSlices';
import Swal from 'sweetalert2';
import { LoginUserContext } from '../../../context/LoginUser';
import { useNavigate } from 'react-router';

const validationSchema = yup.object().shape({
    confirmPassword: yup
        .string()
        .matches(/^\d{6}$/, "Code must be exactly 6 digits")
        .required("Please enter the code you received in your email.")
});

function LoginConfirmPassword() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { loginUser, setEmailCode, saveToken, emailCode } = useContext(LoginUserContext);
    const [confirmPassword] = useConfirmPasswordUserMutation();
    let navigate = useNavigate()

    useEffect(() => {
        const email = loginUser?.userEmail;

        if (email) {
            confirmPassword({ email })
                .unwrap()
                .then(response => {
                    console.log("API Response:", response);
                    if (response.confirmPassword) {
                        setEmailCode(response.confirmPassword.toString());
                    } else {
                        console.error("Verification code could not be retrieved");

                    }
                })
                .catch(error => {
                    console.error("Failed to send the code:", error);

                });
        }
    }, [loginUser, setEmailCode, confirmPassword]);

    useEffect(() => {
        console.log("Current emailCode in context:", emailCode);
    }, [emailCode]);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await confirmPassword({
                email: loginUser?.userEmail,
                confirmPassword: values.confirmPassword
            }).unwrap();

            if (response.token) {
                saveToken(response.token);
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        } catch (error) {
            console.error("Validation error:", error);
        }
        setSubmitting(false);
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

                    <Formik
                        initialValues={{ confirmPassword: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
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
