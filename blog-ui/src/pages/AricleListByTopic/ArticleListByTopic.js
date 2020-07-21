import React, { useState, useEffect } from 'react'
import articlesApi from '../../api/articlesApi'
import { useParams, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

export default () => {
    const { topic } = useParams();
    const [articlesByTopic, setArticlesByTopic] = useState({ content: [] });
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e, newPage) => {
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
                    // .filter( element => element.topic ==="travel")
                    .map(article => (
                        <div className="align-products">
                            <div className="article-container">
                                <div className="margin-container" key={article.articleId}>
                                    <div className="title">{article.title}</div>
                                    <div className="author">{article.author}</div>
                                    <div className="date">{new Date(article.createDate).toLocaleDateString()}</div>
                                    <div className="read-btn"><NavLink to={`/readBlog/${article.articleId}`}>Read</NavLink></div>
                                    <img className="image" src="https://forageandsustain.com/wp-content/uploads/SecondHandClothinginEastAfrica.jpg"></img>
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