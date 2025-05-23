package com.example.backend.repositories;

import com.example.backend.models.TypeMatiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeMatiereRepository extends JpaRepository<TypeMatiere, Long> {
}
