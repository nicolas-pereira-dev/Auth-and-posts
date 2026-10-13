package java_auth_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterDTO {
    public String firstName;
    public String lastName;
    public String email;
    public String password;
}

