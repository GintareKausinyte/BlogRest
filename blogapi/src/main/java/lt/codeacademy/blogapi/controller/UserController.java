package lt.codeacademy.blogapi.controller;

import lombok.Data;
import lt.codeacademy.blogapi.entities.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public UserDto getUser(@AuthenticationPrincipal User user){
        return new UserDto(user);
    }

    @Data
    private static class UserDto {
        private String name;

        UserDto(User user) {
            this.name = user.getName();
        }
    }
}
