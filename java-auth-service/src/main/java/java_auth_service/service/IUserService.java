package java_auth_service.service;

import java.util.Optional;

import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;

public interface IUserService {
    User createUser(User user) throws UserAlreadyExistException;
    Optional<User> findById(Long id);
    Optional<User> findByEmail(String email);
}