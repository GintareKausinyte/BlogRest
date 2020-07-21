package lt.codeacademy.blogapi.entities;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long articleId;
    //spring boot validation starter
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "text", nullable = false, length = 5000)
    private String text;

    @Column(name = "topic", nullable = false)
    private String topic;
    //pridet validacijas sutampancias su front-endu
    @Column(name = "author", nullable = false)
    private String author;

    @Column(name="username")
    private String username;

    @CreationTimestamp
    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "create_date")
    private LocalDateTime createDate;


}