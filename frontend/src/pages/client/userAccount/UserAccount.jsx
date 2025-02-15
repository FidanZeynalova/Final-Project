import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import "../userAccount/UserAccount.css";
import { useRegisterUserMutation } from '../../../redux/Slices/userSlices';


let schema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    age: yup.number().required("Age is required").positive().integer().min(15, "Minimum age required is 15").max(120, "Maximum age allowed is 120"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Please, enter your password.")
        .trim()
        .matches(/\S/, "No spaces allowed")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "One uppercase, one lowercase, one number, and one special character required"
        )
        .min(8, "Password must be at least 8 characters"),
    confirmpassword: yup.string()
        .required("Please confirm your password")
        .oneOf([yup.ref('password'), null], "Passwords must match"),
});




function UserAccount() {
    const [registerUser, { isLoading, error }] = useRegisterUserMutation();
    const navigate = useNavigate()

    useEffect(() => {
        const resetPage = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        resetPage();
    }, []);

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
                            initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmpassword: '', age: '' }}
                            validationSchema={schema}
                            onSubmit={async (values) => {
                                console.log(values);

                                try {
                                    await registerUser(values);
                                    Swal.fire({
                                        icon: "success",
                                        title: `Welcome, ${values.firstname}`,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/login")

                                    // values.firstname = "";
                                    // values.lastname = "";
                                    // values.email = "";
                                    // values.password = "";
                                    // values.confirmpassword = "";
                                    // values.age = "";

                                } catch (err) {
                                    Swal.fire({
                                        icon: "error",
                                        title: "Registration Failed",
                                        text: err.message || "Something went wrong"
                                    });
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="nameInputs">
                                        {/* First Name */}
                                        <div className="input">
                                            <label htmlFor="firstname">First Name</label>
                                            <Field type="text" id="firstname" name="firstname" />
                                            <ErrorMessage name="firstname" component="div" style={{ color: 'red' }} />
                                        </div>

                                        {/* Last Name */}
                                        <div className="input">
                                            <label htmlFor="lastname">Last Name</label>
                                            <Field type="text" id="lastname" name="lastname" />
                                            <ErrorMessage name="lastname" component="div" style={{ color: 'red' }} />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="input">
                                        <label htmlFor="email">E-mail</label>
                                        <Field type="email" id="email" name="email" />
                                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                    </div>

                                    {/* Age */}
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
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <Field type="password" id="confirmpassword" name="confirmpassword" />
                                            <ErrorMessage name="confirmpassword" component="div" style={{ color: 'red' }} />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={isSubmitting || isLoading}>
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

export default UserAccount;
