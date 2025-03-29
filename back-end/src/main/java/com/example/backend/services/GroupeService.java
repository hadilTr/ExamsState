package com.example.backend.services;

import com.example.backend.Mappers.GroupeMapper;
import com.example.backend.dto.AddGroupeRequest;
import com.example.backend.dto.AddGroupeResponse;
import com.example.backend.dto.AddUserRequest;
import com.example.backend.dto.AddUserResponse;
import com.example.backend.models.Groupe;
import com.example.backend.models.User;
import com.example.backend.repositories.GroupeRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GroupeService {

    private final GroupeMapper groupeMapper;
    private GroupeRepository groupeRepository;

    @Autowired
    public GroupeService(GroupeRepository groupeRepository, GroupeMapper groupeMapper) {
        this.groupeRepository = groupeRepository;
        this.groupeMapper = groupeMapper;
    }

    @Transactional
    public AddGroupeResponse addgroupe(@Valid AddGroupeRequest request) {
        Optional<Groupe> groupeOptional = groupeRepository.findByName(request.getName());

        if (groupeOptional.isPresent()) {
            throw new IllegalStateException("Group already exists!");
        }

        // Convert DTO to Entity using MapStruct
        Groupe groupe = groupeMapper.toEntity(request);

        groupeRepository.save(groupe);

        return new AddGroupeResponse("Groupe added successfully!");
    }
}
