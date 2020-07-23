import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import articlesApi from '../../api/articlesApi'
import deleteArticle from '../../api/articlesApi'
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './UserArticles.css'
export default () => {

    const [userArticles, setUserArticles] = useState([]);
    const [isArticles, setIsArticles]=useState(true)
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
            {isArticles ? ((
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
                                    <div className="read-btn"><NavLink to={`/userArticle/${article.articleId}`}>DELETE</NavLink></div>
                                    <div className="read-btn"><NavLink to={`/update/${article.articleId}`}>UPDATE</NavLink></div>

                                </div>
                            </div>
                        </div>

                    ))}

            </div>
            )):((<div>User don't have articles </div>))}  
        </div>
    )
}