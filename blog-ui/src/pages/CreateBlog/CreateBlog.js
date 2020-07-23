import React, { useContext }  from 'react'
import './CreateBlog.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from "react-router-dom";
import articlesApi from '../../api/articlesApi'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PublishIcon from '@material-ui/icons/Publish'
import { UserContext } from '../../App'

import * as Yup from 'yup'


export default () => {
    const {user} = useContext(UserContext)
    const history = useHistory();

    return (

        <div className="container">
            <h3 className="headline">Write New |<span className="sub-title"> Create New Article</span></h3>
            <Formik
                initialValues={{ title: '', description: '', topic: '', author: '' }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('Title is required')
                        .min(5, 'Title must contain at least 5 characters'),
                    text: Yup.string()
                        .required('Text field is required'),
                    topic: Yup.string()
                        .required('Topic is required')
                })}
                onSubmit={values => {
                    articlesApi.createArticle(values)
                    history.push("/submitted");

                }}
            >
                {() => (
                    <Form method="post" className="forms">
                        <Field className="input-name" placeholder="Title" type="text" name="title" />
                        <ErrorMessage className="error" name="title" component="div" />
                        <Field as="textarea" className="input-text" placeholder="Text" type="text" name="description" />
                        <ErrorMessage className="error" name="description" component="div" />
                        {/* <Field as="input" name="author" type="hidden" value="author"/>
                        <ErrorMessage className="error" name="author" component="div" /> */}
                        <Field as="select" className="select-topic" name="topic">
                            <option selected value="" disabled>Topic</option>
                            <option value="travel">Travel</option>
                            <option value="books">Books</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food</option>
                            <option value="technology">Technology</option>
                        </Field>
                        <ErrorMessage className="error" name="topic" component="div" />
                        <input className="create-btn" type="submit" value="Create" />

                    </Form>
                )}
            </Formik>
        </div>
    )
}



{/* <div>
                    <input type="file" name="file" id="file" class="inputfile" />
                </div> */}
