package com.example.backend.controllers;

import com.example.backend.dto.AddUserRequest;
import com.example.backend.dto.AddUserResponse;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.models.User;
import com.example.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/user")

public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService ;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getUsers();
    }


    @PostMapping
    public ResponseEntity<AddUserResponse>
    login(@RequestBody AddUserRequest request)
    {
        AddUserResponse response = userService.addNewUser(request);
        return ResponseEntity.ok(response);
    }
}
