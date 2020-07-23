package lt.codeacademy.blogapi.controller;

import lombok.Data;
import lt.codeacademy.blogapi.entities.User;
import lt.codeacademy.blogapi.repositories.UserRepository;
import lt.codeacademy.blogapi.services.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserDetailServiceImpl userService;

    public UserController(UserDetailServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserDto getUser(@AuthenticationPrincipal User user){
        return new UserDto(user);
    }

    @PostMapping("/newUser")
    public User createUser(@RequestBody User user){
        return userService.newUser(user);
    }

    @Data
    private static class UserDto {
        private String name;
        UserDto(User user) {
            this.name = user.getName();
        }
    }
}
