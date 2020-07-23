import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import articlesApi from '../../api/articlesApi'
import { useHistory } from "react-router-dom";
import './UpdateArticle.css'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required')
        .min(5, 'Title must contain at least 5 characters'),
    description: Yup.string()
        .required('Text field is required'),
    topic: Yup.string()
        .required('Topic is required')
})
export default () => {
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        articlesApi.fetchArticlesById(id)
            .then(response => setArticle(response.data))

    }, [id])


    const [article, setArticle] = useState();
   console.log(article)
    return (

        <div className="container">
            <h3 className="headline"> Update |<span className="sub-title"> Update Your Article</span></h3>
            {
            article ? 
            <Formik
                initialValues={{
                    articleId: article.articleId,
                    title: article.title,
                    description: article.description,
                    topic: article.topic,
                    author: article.name,
                    username: article.username,
                    createDate: article.createDate
                }}
                  
                validationSchema={validationSchema}
               
                onSubmit={values => {
                    console.log("values ", values)
                    articlesApi.updateArticle(values)
                    history.push("/submitted")
               
                }}
                >
                {() => (
                    <Form className="forms">
                     <Field type="hidden" name="articleId"/>

                        <Field className="input-name"  type="text" name="title"/>
                        <ErrorMessage className="error" name="title" component="div" />

                        <Field as="textarea" className="input-text" type="text" name="description"/>
                        <ErrorMessage className="error" name="description" component="div" />


                        <Field as="select" className="select-topic" name="topic">
                            <option selected value="" disabled>Topic</option>
                            <option value="travel">Travel</option>
                            <option value="books">Books</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food</option>
                            <option value="technology">Technology</option>
                        </Field>
                        <ErrorMessage className="error" name="topic" component="div" />
                        <Field type="hidden" name="author"/>
                        <Field type="hidden" name="username"/>
                        <Field type="hidden" name="createDate"/>
                        <input className="create-btn" type="submit" value="Update" />
                    </Form>
                )}
            </Formik> : ""
            }
        </div>
    )
}