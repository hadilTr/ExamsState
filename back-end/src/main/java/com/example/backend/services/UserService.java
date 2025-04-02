package com.example.backend.services;

import com.example.backend.Mappers.UserMapper;
import com.example.backend.dto.AddUserRequest;
import com.example.backend.dto.AddUserResponse;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper; // Injected mapper

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public AddUserResponse addNewUser(@Valid AddUserRequest request) {
        Optional<User> userOptional = userRepository.findUserByUsername(request.getUsername());

        if (userOptional.isPresent()) {
            throw new IllegalStateException("Username already exists!");
        }

        // Convert DTO to Entity using MapStruct
        User user = userMapper.toEntity(request);

        userRepository.save(user);

        return new AddUserResponse("User added successfully!");
    }
}
