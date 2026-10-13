package java_auth_service.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import java_auth_service.dto.LoginDTO;
import java_auth_service.dto.RegisterDTO;
import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;
import java_auth_service.security.JwtService;
import java_auth_service.service.IAuthenticationService;

@RestController
public class AuthenticationController {
    private final JwtService jwtService;
    private final IAuthenticationService authenticationService;
    
    public AuthenticationController(IAuthenticationService authenticationService, JwtService jwtService) {
        this.authenticationService = authenticationService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody RegisterDTO registerDTO) {
        User user = null;
        try {
            user = this.authenticationService.register(registerDTO);
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.status(409).build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
        return ResponseEntity.created(null).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) throws InterruptedException {
        Optional<User> user = this.authenticationService.login(loginDTO);
        if(user.isEmpty()) {
            System.out.println("User not found for email: " + loginDTO.getEmail());
            return ResponseEntity.notFound().build();
        }
        Thread.sleep(1000);
        return ResponseEntity.ok(this.jwtService.generateToken(user.get()));
    }
}
