package lt.codeacademy.blogapi.repositories;

import lt.codeacademy.blogapi.entities.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TopicRepository extends JpaRepository<Article, String> {
    Page<Article> findByTopicIgnoreCase(String topic, Pageable pageable);}
