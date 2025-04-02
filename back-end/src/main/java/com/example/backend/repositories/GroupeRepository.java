package com.example.backend.repositories;
import com.example.backend.enums.Departement;
import com.example.backend.enums.Level;
import com.example.backend.enums.Speciality;
import com.example.backend.models.Groupe;
import com.example.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupeRepository extends JpaRepository<Groupe, Long> {

    Optional<Groupe> findByName(String name);

    Optional<Groupe> findByNameAndSpecialityAndLevelAndDepartement(
            String name,
            Speciality speciality,
            Level level,
            Departement departement
    );

}
