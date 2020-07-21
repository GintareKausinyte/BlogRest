import React, { useState, useEffect } from 'react'
import './ArticleList.css'
import articlesApi from '../../api/articlesApi'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from "react-router-dom";

export default () => {

   
    //isLoading kad nerodytu psl
    const [articles, setArticles] = useState({ content: [] });
    const [page, setPage] = useState(0);
    const [favourites, setFavourites] = useState([]);//favourites context
    const [isLoading, setIsLoading] = useState(true);

    const handleChangePage = (e, newPage) => {
        setPage(newPage - 1);
    }
    const deleteArticle = (id) => {
        const newFavorites = favourites?.filter((favArticle) => favArticle.articleId !== id);
        localStorage.setItem("favourites", JSON.stringify(newFavorites))
        setFavourites(newFavorites)
    }
    const addFavourites = (article) => {
        if (!favourites.some((oldArticle) => oldArticle.articleId === article.articleId)) {
            const newFavorites = [...favourites, article];
            localStorage.setItem("favourites", JSON.stringify(newFavorites))
            setFavourites(newFavorites)
        } else {
            console.log("hasdjkasdasdasdad")
        }

    }
//lodash libr
//badge
    // console.log(articles)

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                margin: 'auto'
            },
        },
    }));

    const classes = useStyles();

    useEffect(() => {
        articlesApi.fetchArticles(page)
            .then(response => setArticles(response.data))
            .then(() => setIsLoading(false))
           
           
    }, [page]);


    // console.log(favourites)
    // console.log(localStorage.getItem("favourites"))

    return (
        <div>
            {isLoading ? ((<div className="container">  
            <div className={classes.root}>
           <CircularProgress />
            </div>
            </div>)) : ((<div className="container">
                <h3 className="headline">All Articles |<span className="sub-title"> Article List</span></h3>
                {articles.content
                    //.filter( element => element.topic ==="travel")
                    .map(article => (
                        <div className="align-products" key={article.articleId}>
                            <div className="article-container">
                                <div className="margin-container">
                                    <div className="title" name={article.title}>{article.title}</div>
                                    <div className="author">{article.author}</div>
                                    <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                                    <div className="read-btn"><NavLink to={`/readBlog/${article.articleId}`}>Read</NavLink></div>
                                    <div onClick={() => addFavourites(article)}>Favourites</div>
                                    <div onClick={() => deleteArticle(article.articleId)}>Delete</div>
                                    {/* {localStorage.getItem("favourites")} */}
                                    {/* <div>{favourites.map(item=>( <div className="title" name={item.title}>{item.title}</div>))}</div> */}
                                </div>
                            </div>
                        </div>

                    ))}
                <div className="page-container">
                    <div className={classes.root}>
                        <Pagination onChange={handleChangePage} className="bottom" count={articles.totalPages} size="medium" showFirstButton showLastButton />
                    </div>
                </div>
            </div>))}
        </div>
    )
}
