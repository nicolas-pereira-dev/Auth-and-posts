package java_auth_service.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;
import java_auth_service.repository.UserRepository;

@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) throws UserAlreadyExistException {
        if (this.userRepository.existsByEmail(user.getEmail())) {
            throw new UserAlreadyExistException(String.format("User with email %s already exists", user.getEmail()));
        }
        
        return this.userRepository.save(user);
    }

    public Optional<User> findById(Long id) {
        return this.userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }
    
}
