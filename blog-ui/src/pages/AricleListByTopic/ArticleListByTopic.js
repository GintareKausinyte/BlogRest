import React, { useState, useEffect, useContext } from 'react'
import articlesApi from '../../api/articlesApi'
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import { FavouritesContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            margin: 'auto'
        },
    },
}));

export default () => {
    const { topic } = useParams();
    const [articlesByTopic, setArticlesByTopic] = useState({ content: [] });
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { addFav, deleteFav} = useContext(FavouritesContext)

    const handleChange = (e, newPage) => {
        setPage(newPage - 1);
    }

    const classes = useStyles();

    useEffect(() => {
        articlesApi.fetchArticlesByTopic(topic, page)
            .then(resp => setArticlesByTopic(resp.data))
            .then(() => setIsLoading(false))
            .catch(error=>console.log(error))

    }, [topic], [page])


    return (
        <div> 
            {isLoading ? ((<div className="container">
            <div className={classes.root}>
                <CircularProgress />

            </div>
        </div>)) :
            ((<div className="container">
                <h3 className="headline">All Articles |<span className="sub-title">{topic}</span></h3>
                <div>{articlesByTopic.topic}</div>
                {articlesByTopic.content
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
                                <div className="addfav-btn" onClick={()=>addFav(article)}>Add to favourites</div>
                                <div className= "deletefav-btn" onClick={()=>deleteFav(article.articleId)}>Delete from favourites</div>
        
                            </div>
                        </div>
                    </div>

                    ))}
                    
                <div className="page-container">
                    <div className={classes.root}>
                        <Pagination onChange={handleChange} className="bottom" count={articlesByTopic.totalPages} size="medium" />
                    </div>
                </div>
            </div>))}  
        </div>
    )
}