package com.example.backend.repositories;

import com.example.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<User, Long> {

    //Select * from user where email=****
    @Query("SELECT u FROM User u WHERE u.username=?1")
    Optional<User> findUserByUsername(String username);
}