import React, { useContext } from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { setCredentials } from '../../api'
import userApi from '../../api/userApi'
import { UserContext } from '../../App'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

export default () => {
    const { login } = useContext(UserContext)
    const history=useHistory();

    return (
        <div className="align_form">
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required')
                        .min(4, 'Username must contain at least 4 characters'),
                    password: Yup.string()
                        .required('Password field is required')
                        .min(4, 'Password must contain at least 4 characters'),

                })}

                onSubmit={credentials => {
                    setCredentials(credentials)

                    userApi.getUser()
                        .then(({ data }) => {
                            login(data)
                            history.push("/userArticles")
                        })

                }}
            >
                {() => (
                    <Form method="post">
                        <h2>Log in</h2>
                        <p>Username</p>
                        <Field name="username" type="text" className="log-in" />
                        <ErrorMessage className="error" name="username" component="div" />
                        <p>Password</p>
                        <Field name="password" type="password" className="log-in" />
                        <ErrorMessage className="error" name="password" component="div" />
                        <input className="button" type="submit" value="Log In" />
                    </Form>
                )}
            </Formik>
            <div className="align-registration">
                <span>Don't have an account? </span>
                <Link to="/registration">Register</Link>
            </div>
        </div>
    )
}