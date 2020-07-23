import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articlesApi from '../../api/articlesApi'
import './ReadBlog.css'

export default () => {
    const { id } = useParams();
    const [article, setArticle] = useState({});
    useEffect(() => {
        articlesApi.fetchArticlesById(id)
            .then(response => setArticle(response.data))

    }, { id })

    return (
        <div className="container">
            <div className="text-container">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <h5>{article.author}</h5>
            </div>
        </div>
    )
}