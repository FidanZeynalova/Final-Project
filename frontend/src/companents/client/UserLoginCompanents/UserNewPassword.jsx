import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserLoginCompanents/UserNewPassword.css"
import { ThemeContext } from '../../../context/ThemeContext'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let schema = yup.object().shape({
    password: yup.string().required(),
    newPassword: yup.string().required()
});

function UserNewPassword({ setPage }) {
    let { light } = useContext(ThemeContext)
    return (
        <>
            <Helmet>
                <title>New Password - Half Baked Harvest</title>
            </Helmet>
            <div className="UserNewPassword">
                <div className="UserNewPasswordContainer">
                    <div className='head' style={{
                        color: light ? "black" : ""
                    }}>
                        <p>Please enter your new password below. Make sure it’s strong and unique to keep your account secure.
                            After updating, you’ll be able to log in with your new password.
                        </p>
                    </div>
                    <Formik
                        initialValues={{ password: '', newPassword: '' }}
                        validationSchema={schema}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.password == values.newPassword) {
                                alert("Succes")
                            } else {
                                alert("Şifrənilər eyni deyil!")
                                setSubmitting(false)
                            }

                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                               <div className="input">
                               <label htmlFor="pasword">Enter New Password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                               </div>


                               <div className="input">
                               <label htmlFor="pasword">Enter Confirm Password</label>
                                <Field type="password" name="newPassword" />
                                <ErrorMessage name="newPassword" component="div" style={{ color: "red" }} />
                               </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div >

        </>
    )
}

export default UserNewPassword
