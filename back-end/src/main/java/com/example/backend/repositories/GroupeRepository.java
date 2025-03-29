package com.example.backend.repositories;
import com.example.backend.models.Groupe;
import com.example.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupeRepository extends JpaRepository<Groupe, Long> {

    Optional<Groupe> findByName(String name);


}
