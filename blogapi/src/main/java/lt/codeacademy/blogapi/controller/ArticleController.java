package lt.codeacademy.blogapi.controller;

import lt.codeacademy.blogapi.entities.Article;
import lt.codeacademy.blogapi.entities.User;
import lt.codeacademy.blogapi.services.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {
private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

//    @PreAuthorize("permitAll")
    @GetMapping
    public Page<Article> getAllArticles(@RequestParam(name = "pageNumber", defaultValue = "1")int pageNumber, @RequestParam(name="pageSize", defaultValue = "5")int pageSize){
        return articleService.getAllArticles(pageNumber, pageSize);
    }
//    @PreAuthorize("permitAll()")
    @GetMapping("/{id}")
    public Article readArticle(@PathVariable Long id){
        return articleService.getArticleById(id);
    }


//    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create")
    public Article createArticle(@RequestBody Article article, @AuthenticationPrincipal User user){
        Article newArticle= new Article();
        newArticle.setTitle(article.getTitle());
        newArticle.setText(article.getText());
        newArticle.setTopic(article.getTopic());
        newArticle.setAuthor(user.getName());
        newArticle.setUsername(user.getUsername());
        return articleService.createOrUpdateArticle(newArticle);
    }

//    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public void deleteArticle(@PathVariable Long id){
        articleService.deleteArticleById(id);
    }

//    @PreAuthorize("isAuthenticated()")
    @PostMapping("/update/{id}")
    public Article updateArticle(@RequestBody Article article){
        return articleService.createOrUpdateArticle(article);
    }


//    @PreAuthorize("isAuthenticated()")
    @GetMapping("/userArticles")
    public List<Article> getArticlesByUserName(@AuthenticationPrincipal User user){
        return articleService.getByUserName(user.getUsername());
    }
}
