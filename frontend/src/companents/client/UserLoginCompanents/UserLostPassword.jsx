import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserLoginCompanents/UserLostPassword.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ThemeContext } from '../../../context/ThemeContext'


let validationSchema = yup.object().shape({
    email: yup.string().email().required(),
});


function UserLostPassword({ setPage }) {
    let { light } = useContext(ThemeContext)
    return (
        <>
            <Helmet>
                <title>Lost Password - Half Baked Harvest</title>
            </Helmet>
            <div className="UserLostPassword">
                <div className="UserLostPasswordContainer">
                    <div className="head" style={{
                        color: light ? "black" : ""
                    }}>
                        <p>Forgot your password? Please enter your username or email address below.
                            We will send you an email with instructions on how to securely reset your password.
                            If you don’t receive the email within a few minutes, please check your spam folder or try again.</p>
                    </div>
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            // console.log(values);
                            setPage("confirm")
                            
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="input">
                                <label htmlFor="email">Enter E-mail</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" style={{color:"red"}}/>  
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </>
    )
}

export default UserLostPassword
