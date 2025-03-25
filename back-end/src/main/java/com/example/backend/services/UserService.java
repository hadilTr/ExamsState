package com.example.backend.services;

import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
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

    public void addNewUser(User user)
    {
       Optional<User> userOptional = userRepository.
               findUserByUsername(user.getUsername());

       if (userOptional.isPresent()) {
           throw new IllegalStateException("username exists");
       }
        userRepository.save(user);

    }
}
