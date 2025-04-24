package com.example.backend.repositories;

import com.example.backend.enumeration.*;
import com.example.backend.models.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EnseignantRepository extends JpaRepository<Enseignant, Long> {
    List<Enseignant> findByDepartementAndSpecialiteAndNiveauAndGroupe(
            DepartementEnum departement,
            SpecialiteEnum specialite,
            NiveauEnum niveau,
            GroupeEnum groupe);

    // Update Asma
/*
    @Query("SELECT COUNT(e) FROM Enseignant e")
    long countTotalTeachers();

    @Query("SELECT COUNT(e) FROM Enseignant e WHERE e.isLate = true")
    long countLateTeachers(); */


}