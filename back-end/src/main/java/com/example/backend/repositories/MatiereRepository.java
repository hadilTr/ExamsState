package com.example.backend.repositories;

import com.example.backend.models.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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
    @Modifying
    @Query("UPDATE Matiere m SET m.nomMatiere = :nomMatiere, m.updatedAt = CURRENT_TIMESTAMP WHERE m.id = :id")
    void updateMatiere(@Param("id") Long id, @Param("nomMatiere") String nomMatiere);

    List<Matiere> findByRecuTrueOrValideTrueOrderByUpdatedAtDesc();

    @Query("SELECT COUNT(m) FROM Matiere m WHERE m.valide = false")
    long countUnvalidatedSubjects();
    @Query("SELECT COUNT(m) FROM Matiere m WHERE m.recu = false")
    long countUnsubmittedSubjects();


}
