package com.example.backend.repositories;

import com.example.backend.models.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface EnseignantRepository extends JpaRepository<Enseignant, Long> {

    @Query("SELECT DISTINCT e FROM Enseignant e JOIN e.matrices m WHERE m.etatReception = 'EN_RETARD' AND m.type = 'RECEPTION'")
    List<Enseignant> findEnseignantsAvecReceptionEnRetard();


    @Query("SELECT DISTINCT e FROM Enseignant e JOIN e.matrices m WHERE m.etatValidation = 'EN_RETARD' AND m.type = 'VALIDATION'")
    List<Enseignant> findEnseignantsAvecValidationEnRetard();

    @Query("SELECT DISTINCT e FROM Enseignant e JOIN e.matrices m WHERE m.etatValidation = 'EN_ATTENTE' AND m.type = 'RECEPTION'")
    List<Enseignant> findEnseignantsAvecValidationEnAttente();

    @Query("SELECT DISTINCT e FROM Enseignant e JOIN e.matrices m WHERE m.etatValidation = 'EN_ATTENTE' AND m.type = 'VALIDATION'")
    List<Enseignant> findEnseignantsAvecReceptionEnAttente();
}