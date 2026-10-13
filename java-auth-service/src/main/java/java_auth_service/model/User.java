package java_auth_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data 
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    @NotBlank
    @Column(nullable = false)
    public String firstName;
    @NotBlank
    @Column(nullable = false)
    public String lastName;
    @NotBlank
    @Email
    @Column(nullable = false)
    public String email;  // Format + unique en bdd
    @NotBlank
    @Column(nullable = false)
    public String password;
    @NotNull
    @Column(nullable = false)
    public StatusEnum status;
}
