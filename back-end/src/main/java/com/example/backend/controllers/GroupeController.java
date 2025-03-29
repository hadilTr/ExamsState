package com.example.backend.controllers;

import com.example.backend.dto.AddGroupeRequest;
import com.example.backend.dto.AddGroupeResponse;
import com.example.backend.dto.AddUserRequest;
import com.example.backend.dto.AddUserResponse;
import com.example.backend.models.User;
import com.example.backend.services.GroupeService;
import com.example.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/groupe")

public class GroupeController {

    private final GroupeService groupeService;

    @Autowired
    public GroupeController(GroupeService groupeService) {
        this.groupeService = groupeService ;
    }



    @PostMapping
    public ResponseEntity<AddGroupeResponse>
    login(@RequestBody AddGroupeRequest request)
    {
        AddGroupeResponse response = groupeService.addgroupe(request);
        return ResponseEntity.ok(response);
    }
}