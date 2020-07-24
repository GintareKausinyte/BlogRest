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
                                <img className="image" src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                                    {/* <div className="author">{article.author}</div> */}
                                    <div className="read-btn"><Link to={`/readBlog/${article.articleId}`} className="read-btn-text">Read</Link></div>
                                </div>
                                <div className="margin-container-info">
                                <div className="del-fav" onClick={() => deleteFav(article.articleId)}>Delete from favourites</div>
                                <div className="title" name={article.title}>{article.title}</div>
                                        <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
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