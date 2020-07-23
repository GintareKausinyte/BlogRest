import HTTP from '.'


export default {
    fetchArticles(page){
        return HTTP.get(`http://localhost:8080/articles?pageNumber=${page}`)
    },
    fetchArticlesById(id){
        return HTTP.get(`http://localhost:8080/articles/${id}`)
    },
    fetchArticlesByTopic(topic, page){
        return HTTP.get(`http://localhost:8080/${topic}?pageNumber=${page}`)
    },
    createArticle(article){
        return HTTP.post('http://localhost:8080/articles/create', article)
    },
    deleteArticle(id){
        return HTTP.get(`http://localhost:8080/articles/delete/${id}`)
    },
    updateArticle(arti){
        return HTTP.post('http://localhost:8080/articles/update', arti)
    },
    fetchUserArticles(){
        return HTTP.get(`http://localhost:8080/articles/userArticles`)
    }
}