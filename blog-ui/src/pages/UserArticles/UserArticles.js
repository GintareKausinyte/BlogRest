import React, { useEffect, useState } from 'react'
import articlesApi from '../../api/articlesApi'
import { NavLink, Link } from "react-router-dom";
import './UserArticles.css'
export default () => {

    const [userArticles, setUserArticles] = useState([]);

    useEffect(() => {
            articlesApi.fetchUserArticles()
            .then(response => setUserArticles(response.data))
    }, [])
    return(
        <div>
        {userArticles
            .map(article => (
                <div className="align-products" key={article.articleId}>
                    <div className="article-container">
                        <div className="margin-container">
                            <div className="title" name={article.title}>{article.title}</div>
                            <div className="author">{article.author}</div>
                            <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                            <div className="read-btn"><NavLink to={`/readBlog/${article.articleId}`}>Read</NavLink></div>
                        </div>
                    </div>
                </div>
       
            ))}
            </div>
    )
}