import React from 'react'
import './Registration.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


export default () => {
    return (
        <div className="align_registration">
            <Formik
                  initialValues={{username:'', password:''}}
                  validationSchema={Yup.object().shape({
                      username: Yup.string()
                      .required('Username is required')
                      .min(5, 'Username must contain at least 5 characters'),
                      password: Yup.string()
                      .required('Password field is required')
                      .min(5, 'Password must contain at least 5 characters'),
                      name: Yup.string()
                      .required('Name is required'),
                      passwordConfirmation: Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Repeat your password'),
                  })}
                  onSubmit={values => {
                          //kodas
                  }}
            >
                {() => (
                <Form method="post">
                    <h2>Join Us</h2>
                    <p>Name</p>
                    <Field name="name" type="text" className="regi"/>
                    <ErrorMessage className="error" name="name" component="div"/>
                    <p>Username</p>
                    <Field name="username" type="text" className="regi" />
                    <ErrorMessage className="error" name="username" component="div"/>
                    <p>Password</p>
                    <Field name="password" type="password" className="regi" />
                    <ErrorMessage className="error" name="password" component="div"/>
                    <p>Repeat Password</p>
                    <Field name="passwordConfirmation" type="password" className="regi" />
                    <ErrorMessage className="error" name="passwordConfirmation" component="div"/>
                    <input className="button" type="submit" value="Submit"/>               </Form>
                )}
            </Formik>
        </div>

    )
}