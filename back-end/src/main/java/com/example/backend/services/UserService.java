package com.example.backend.services;

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


    @Autowired //permet d'injecter le repo dans le srrvice
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public AddUserResponse addNewUser(@Valid AddUserRequest request)
    {
       Optional<User> userOptional = userRepository.
               findUserByUsername(request.getUsername());

       if (userOptional.isPresent()) {
           throw new IllegalStateException("username exists");
       }
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setRole(request.getRole());
        user.setPhone(request.getPhone());
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        return new AddUserResponse("added user!");
    }
}
