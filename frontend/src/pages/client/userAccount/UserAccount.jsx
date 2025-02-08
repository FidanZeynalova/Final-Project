import React from 'react'
import "../userAccount/UserAccount.css"
import { Helmet } from 'react-helmet'
import { NavLink } from "react-router-dom"
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'

let schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    password: yup.number().required().positive().integer(),
    confirmPassword: yup.number().required().positive().integer(),
});

function UserAccount() {
    return (
        <div>
            <Helmet>
                <title>Register - Half Baked Harvest</title>
            </Helmet>
            <div className="UserRegister">
                <div className="UserRegisterContainer">
                    <div className="UserRegisterInfo">
                        <h1>Register or Login</h1>
                        <span style={{ fontWeight: "550", fontSize: "25px" }}>Join Today to Start Saving Your Favorite Recipes!</span>
                        <p>Already Registered?</p>
                        <p><NavLink to={"/login"} >Login to your account here.</NavLink></p>
                        <h1>Useful Information</h1>
                        <p><NavLink>How to Save Recipes</NavLink> | <NavLink>How to Meal Plan</NavLink> |
                            <NavLink> How to use Shopping Lists</NavLink> | <NavLink>Adding Ingredients to Target Cart</NavLink></p>
                    </div>
                    <div className="Register">
                        <div className="info">
                            <h1>Don’t Have an Account Yet?</h1>
                            <p>Create a Half Baked Harvest Recipe Box account using the form below to easily save your favorite content, so you never forget a recipe again. Once you save a recipe, you can access it on any device after you login.</p>
                        </div>

                        {/* Formik form */}
                        <Formik
                            initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', age: '' }}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                console.log(values);

                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="nameInputs">
                                        {/* First Name */}
                                        <div className="input">
                                            <label htmlFor="firstName">First Name</label>
                                            <Field type="text" id="firstName" name="password" />
                                            <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                                        </div>


                                        {/* Last Name */}
                                        <div className="input">
                                            <label htmlFor="lastName">Last Name</label>
                                            <Field type="text" id="lastName" name="lastName" />
                                            <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                                        </div>
                                    </div>

                                    {/* Age */}
                                    <div className="input">
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" id="email" name="email" />
                                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                    </div>

                                    {/* Email */}
                                    <div className="input">
                                        <label htmlFor="age">Age</label>
                                        <Field type="number" id="age" name="age" />
                                        <ErrorMessage name="age" component="div" style={{ color: 'red' }} />
                                    </div>

                                    <div className="passwordInputs">
                                        {/* Password */}
                                        <div className="input">
                                            <label htmlFor="password">Password</label>
                                            <Field type="password" id="password" name="password" />
                                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="input">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <Field type="password" id="confirmPassword" name="confirmPassword" />
                                            <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={isSubmitting}>
                                        Register Now
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserAccount
