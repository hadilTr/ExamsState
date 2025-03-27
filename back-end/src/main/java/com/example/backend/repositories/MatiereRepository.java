package com.example.backend.repositories;


import com.example.backend.models.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatiereRepository extends JpaRepository<Matiere, Long> {
    Optional<Matiere> findByNom(String nom);

}
