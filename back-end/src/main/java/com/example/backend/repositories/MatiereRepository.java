package com.example.backend.repositories;

import com.example.backend.models.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

import static org.hibernate.sql.ast.Clause.ORDER;

public interface MatiereRepository extends JpaRepository<Matiere, Long> {
    List<Matiere> findByEnseignantId(Long enseignantId);



    /// Asma Update
    @Query("SELECT m.departement AS departement, " +
            "m.niveau AS niveau, " +
            "COUNT(*) AS total " +
            "FROM Matiere m " +
            "WHERE m.recu = true AND m.valide = true " +
            "GROUP BY m.departement, m.niveau " +
            "ORDER BY m.departement, m.niveau")
    List<Object[]> getMatiereValideByDepartementAndNiveau();


    @Query("SELECT m FROM Matiere m WHERE m.recu = true OR m.valide = true ORDER BY m.id DESC")
    List<Matiere> findRecentValidatedOrReceived();

}
