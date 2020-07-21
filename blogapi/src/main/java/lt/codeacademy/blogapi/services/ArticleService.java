package lt.codeacademy.blogapi.services;

import lt.codeacademy.blogapi.entities.Article;
import lt.codeacademy.blogapi.repositories.ArticleRepository;
import lt.codeacademy.blogapi.repositories.TopicRepository;
import lt.codeacademy.blogapi.services.exceptions.ArticleNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleService {
    private TopicRepository topicRepository;
    private ArticleRepository articleRepository;


    public ArticleService(TopicRepository topicRepository, ArticleRepository articleRepository) {
        this.topicRepository = topicRepository;
        this.articleRepository = articleRepository;
    }

    public Page<Article> getAllArticles(int pageNumber, int pageSize){
        return  articleRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }
    public Article getArticleById(Long id){
        return articleRepository.findById(id).orElseThrow(()->new ArticleNotFoundException("Article with "+ id +" not found"));
    }
    public Page<Article> getByTopic(String topic, int pageNumber, int pageSize){//kaip grazinti page
        return topicRepository.findByTopicIgnoreCase(topic, PageRequest.of(pageNumber, pageSize));
    }
    public List<Article> getByUserName(String username){
        return articleRepository.findArticleByUsername(username);
    }

    public void deleteArticleById(Long id){articleRepository.deleteById(id);}

    public Article createOrUpdateArticle(Article article){
        return articleRepository.save(article);
    }
}
