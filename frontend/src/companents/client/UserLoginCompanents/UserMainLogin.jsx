import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import "../UserLoginCompanents/UserMainLogin.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required")
});

function UserMainLogin({ setPage }) {

    return (
        <div>
            <Helmet>
                <title>Login - Half Baked Harvest</title>
            </Helmet>
            <div className="UserLogin">
                <div className="UserLoginContainer">
                    <div className="UserLoginInfo">
                        <h1>Log In</h1>
                        <p>Sign In to your account to see your favorite recipes and shopping lists. <br /><br /> If you have not created an account yet, <NavLink to={"/recipeCollections"} >click here to create a My Recipe Box account</NavLink>. <br /><br />If you do not see the login form below, you are already logged in and can <NavLink>go to your My Recipe Box account now</NavLink>.</p>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {

                            console.log(values);

                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="input">
                                    <label htmlFor="email"> Email <span style={{ color: "red" }}>*</span></label>
                                    <Field type="text" id="email" name="email" />
                                    <ErrorMessage name="email" component="div" className="error" style={{ color: "red" }} />
                                </div>
                                <div className="input">
                                    <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                                    <Field type="password" id="password" name="password" />
                                    <ErrorMessage name="password" component="div" className="error" style={{ color: "red" }} />
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
