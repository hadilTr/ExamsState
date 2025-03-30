package com.example.backend.repositories;

import com.example.backend.enumeration.*;
import com.example.backend.models.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EnseignantRepository extends JpaRepository<Enseignant, Long> {
    List<Enseignant> findByDepartementAndSpecialiteAndNiveauAndGroupe(
            DepartementEnum departement,
            SpecialiteEnum specialite,
            NiveauEnum niveau,
            GroupeEnum groupe);
}
