package lt.codeacademy.blogapi.controller;

import lt.codeacademy.blogapi.entities.Article;
import lt.codeacademy.blogapi.services.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/{topic}")
public class TopicController {
    private final ArticleService articleService;

    public TopicController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PreAuthorize("permitAll()")
    @GetMapping
    public Page<Article> getAllArticlesByTopic(@PathVariable String topic, @RequestParam(name = "pageNumber", defaultValue = "0")int pageNumber, @RequestParam(name="pageSize", defaultValue = "5")int pageSize){
        return articleService.getByTopic(topic, pageNumber, pageSize);

    }
}
