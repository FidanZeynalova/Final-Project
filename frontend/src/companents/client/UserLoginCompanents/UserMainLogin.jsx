import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import "../UserLoginCompanents/UserMainLogin.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LoginUserContext } from '../../../context/LoginUser';
import { useUserLoginMutation } from '../../../redux/Slices/userSlices';

let validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required")
});

function UserMainLogin({ setPage }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    let { setLoginUser } = useContext(LoginUserContext);
    let [userLogin] = useUserLoginMutation();

    const typeChange = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            <Helmet>
                <title>Login - Half Baked Harvest</title>
            </Helmet>
            <div className="UserLogin">
                <div className="UserLoginContainer">
                    <div className="UserLoginInfo">
                        <h1>Log In</h1>
                        <p>
                            Sign In to your account to see your favorite recipes and shopping lists.
                            <br /><br />
                            If you have not created an account yet, <NavLink to={"/recipeCollections"}>click here to create a My Recipe Box account</NavLink>.
                            <br /><br />
                            If you do not see the login form below, you are already logged in and can <NavLink>go to your My Recipe Box account now</NavLink>.
                        </p>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                const response = await userLogin(values).unwrap();
                                console.log("Backend cavabı:", response);
                                console.log("Backend cavabı:", response._id);

                                if (!response._id || !response.email) {
                                    throw new Error("Login məlumatları natamamdır!");
                                }

                                setLoginUser({
                                    userEmail: response.email,
                                    userId: response._id,
                                });

                                setPage("loginConfirmPassword");

                            } catch (error) {
                                console.error("Login xətası:", error.message);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="input">
                                    <label htmlFor="email"> Email <span style={{ color: "red" }}>*</span></label>
                                    <Field type="text" id="email" name="email" />
                                    <ErrorMessage name="email" component="div" className="error" style={{ color: "red" }} />
                                </div>
                                <div className="input" style={{ position: 'relative' }}>
                                    <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                                    <div className="input" style={{ position: 'relative' }}>
                                        <Field
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                        />
                                        <span
                                            onClick={typeChange}
                                            style={{
                                                position: 'absolute',
                                                right: '20px',
                                                top: '60%',
                                                transform: 'translateY(-50%)',
                                                fontSize: '25px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </span>
                                    </div>
                                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                                </div>
                                <span>Forgotten your password? <NavLink onClick={() => setPage("forgetPassword")}>Click here</NavLink> to reset it.</span>
                                <button type="submit" disabled={isSubmitting}>Log In</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default UserMainLogin;
