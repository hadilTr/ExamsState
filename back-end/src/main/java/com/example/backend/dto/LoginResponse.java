package com.example.backend.dto;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class LoginResponse {
    //private String token;     // JWT token for Angular to store
    private String username;  // Authenticated username
    private String role;     // User roles for frontend authorization


}