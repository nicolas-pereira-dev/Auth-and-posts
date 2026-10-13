package java_auth_service.controller;

import java.util.Optional;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;
import java_auth_service.service.IUserService;

@RestController 
public class UserController {
    final private IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        try {
            User createdUser = this.userService.createUser(user);
            return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(createdUser);
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = this.userService.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUserByEmailFromToken(Authentication authentication) {
        Optional<User> user = this.userService.findByEmail(authentication.getName());
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}