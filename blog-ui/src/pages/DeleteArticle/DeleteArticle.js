import React, { useEffect, useState } from 'react'
import articlesApi from '../../api/articlesApi'
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default ()=>{
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const history=useHistory();

    useEffect(() => {
        articlesApi.fetchArticlesById(id)
            .then(response => setArticle(response.data))

    }, [id])

    // const deleteArticle = (id)=>{
    //     articlesApi.deleteArticle(id)
    // }

    return (
        <div className="container">
            <div className="text-container">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <h5>{article.author}</h5>
                    <button className="button" onClick={()=>{
                        articlesApi.deleteArticle(id);
                        history.push('/deleted')}}>DELETE</button>
            </div>
        </div>
    )


}
