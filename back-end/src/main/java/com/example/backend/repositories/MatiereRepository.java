package com.example.backend.repositories;

import com.example.backend.models.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MatiereRepository extends JpaRepository<Matiere, Long> {
    List<Matiere> findByEnseignantId(Long enseignantId);
}
