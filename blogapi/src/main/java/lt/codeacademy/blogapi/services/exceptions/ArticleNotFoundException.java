package lt.codeacademy.blogapi.services.exceptions;

public class ArticleNotFoundException extends RuntimeException {
    public ArticleNotFoundException(String message){
        super(message);
    }
}
