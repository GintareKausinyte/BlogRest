import React, { useContext } from 'react'
import { FavouritesContext } from '../../App'
import { NavLink } from "react-router-dom";
import './Favourites.css'

export default () => {

    const {favNumber, fav, deleteFav } = useContext(FavouritesContext)
    return (
        <div>
            { favNumber>0 ?
            <div className="container">
                    <h3 className="headline">Favourites |<span className="sub-title"> Favourite article List</span></h3>
                {fav
                    .map(article => (
                        <div className="align-products" key={article.articleId}>
                            <div className="article-container">
                                <div className="margin-container">
                                    <div className="title" name={article.title}>{article.title}</div>
                                    <div className="author">{article.author}</div>
                                    <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                                    <div className="read-btn"><NavLink to={`/readBlog/${article.articleId}`}>Read</NavLink></div>
                                    <div onClick={() => deleteFav(article.articleId)}>Delete</div>
                                </div>
                            </div>
                        </div>

                    ))}
            </div>

            :<div className="container">
            <div className="noList font">You do not have favourite articles</div>
            </div>
            
            }
        </div>
    )
}