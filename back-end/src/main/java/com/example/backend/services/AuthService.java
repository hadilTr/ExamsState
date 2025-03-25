package com.example.backend.services;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;



    @Autowired
    public AuthService(UserRepository userRepository) {this.userRepository = userRepository;}

    public LoginResponse login(LoginRequest loginRequest) {



        User user = userRepository.findUserByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            throw new RuntimeException("Wrong password");
        }


        return new LoginResponse(user.getUsername(), user.getRole());
    }
}
