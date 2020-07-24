import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import articlesApi from '../../api/articlesApi'
import deleteArticle from '../../api/articlesApi'
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './UserArticles.css'
export default () => {

    const [userArticles, setUserArticles] = useState([]);
    const history = useHistory();

    const deleteUserArticle = (id) => {
        articlesApi.deleteArticle(id)
        history.push('/userArticles')
    }

    useEffect(() => {
        articlesApi.fetchUserArticles()
            .then(response => setUserArticles(response.data))
            console.log(userArticles)
        //    const s=()=> userArticles.length>0 ? setIsArticles(true) : setIsArticles(false)

    }, [])

  


    return (
        <div className="container">
            {userArticles.length >0 ? 
            <div>
                {userArticles
                    .map(article => (
                        <div className="align-products" key={article.articleId}>
                            <div className="article-container">
                                <div className="margin-container">
                                <div className="title-user" name={article.title}>{article.title}</div>
                                    <div className="author-user">{article.author}</div>
                                    <div className="date-user">{new Date(article.createDate).toLocaleDateString()}</div>
                                    <div className="update-btn"><NavLink to={`/update/${article.articleId}`} className="read-btn-text">Update</NavLink></div>
                                    <div className="delete-btn"><NavLink to={`/userArticle/${article.articleId}`} className="read-btn-text">Delete</NavLink></div>
                                    <div className="read-btn-user"><Link to={`/readBlog/${article.articleId}`} className="read-btn-text">Read</Link></div>

                                </div>
                            </div>
                        </div>

                    ))}

            </div>
            : <div className="container">
            <div className="noList font">---</div>
            </div>}  
        </div>
    )
}