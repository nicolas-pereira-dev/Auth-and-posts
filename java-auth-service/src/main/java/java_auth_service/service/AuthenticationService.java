package java_auth_service.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import java_auth_service.dto.LoginDTO;
import java_auth_service.dto.RegisterDTO;
import java_auth_service.model.StatusEnum;
import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;
import java_auth_service.repository.UserRepository;

@Service
public class AuthenticationService implements IAuthenticationService {

    private final UserRepository userRepository;

    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(RegisterDTO dto) throws UserAlreadyExistException {
        if (this.userRepository.existsByEmail(dto.getEmail())) {
            throw new UserAlreadyExistException(String.format("User with email %s already exists", dto.getEmail()));
        }
        
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setStatus(StatusEnum.ACTIVE);
        
        return this.userRepository.save(user);
    }

    public Optional<User> login(LoginDTO dto) {
        return this.userRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
    }

}
