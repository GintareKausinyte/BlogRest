import React, { useState, useEffect, useContext } from 'react'
import './ArticleList.css'
import articlesApi from '../../api/articlesApi'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { FavouritesContext } from '../../App'
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from "react-router-dom";

export default () => {

    const { addFav, deleteFav} = useContext(FavouritesContext)
    const [articles, setArticles] = useState({ content: [] });
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleChangePage = (e, newPage) => {
        setPage(newPage - 1);
    }

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

    return (
        <div>
            {isLoading ? ((<div className="container">
                <div className={classes.root}>
                    <CircularProgress />
                </div>
            </div>)) : ((<div className="container">
                <h3 className="headline">All Articles |<span className="sub-title"> Article List</span></h3>
                {articles.content
                    .map(article => (
                        <div className="align-products" key={article.articleId}>
                            <div className="article-container">
                                <div className="margin-container">
                                    <div className="title" name={article.title}>{article.title}</div>
                                    <div className="author">{article.author}</div>
                                    <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                                    <div className="read-btn"><NavLink to={`/readBlog/${article.articleId}`}>Read</NavLink></div>
                                    <div onClick={()=>addFav(article)}>Favourites</div>
                                    <div onClick={()=>deleteFav(article.articleId)}>Delete</div>
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
