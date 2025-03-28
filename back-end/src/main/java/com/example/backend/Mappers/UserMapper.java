package com.example.backend.Mappers;

import com.example.backend.dto.AddUserRequest;
import com.example.backend.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper(componentModel = "spring", uses = PasswordEncoder.class)
public interface UserMapper {

    @Mapping(target = "password", ignore = true) // Skip plain password
    User toUser(AddUserRequest request);

    // Helper method to encode password
    default User toUserWithEncodedPassword(AddUserRequest request, PasswordEncoder encoder) {
        User user = toUser(request);
        user.setPassword(encoder.encode(request.getPassword()));
        return user;
    }
}
