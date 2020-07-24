import React, { useContext } from 'react'
import { FavouritesContext } from '../../App'
import { Link } from "react-router-dom";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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
                                    <div className="read-btn"><Link to={`/readBlog/${article.articleId}`} className="read-btn-text">Read</Link></div>
                                    <div>
                                    <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                                    </div>
                                    <div className= "delete-icon" onClick={()=>deleteFav(article.articleId)}><HighlightOffIcon fontSize="medium"/></div>
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