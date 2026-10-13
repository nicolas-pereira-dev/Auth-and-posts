package java_auth_service.service;

import java.util.Optional;

import java_auth_service.dto.LoginDTO;
import java_auth_service.dto.RegisterDTO;
import java_auth_service.model.User;
import java_auth_service.model.UserAlreadyExistException;

public interface IAuthenticationService {
    User register(RegisterDTO dto) throws UserAlreadyExistException;
    Optional<User> login(LoginDTO dto);
}