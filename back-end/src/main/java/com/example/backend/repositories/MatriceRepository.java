package com.example.backend.repositories;

import com.example.backend.models.Matrice;
import com.example.backend.models.Matrice.EtatReception;
import com.example.backend.models.Matrice.EtatValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MatriceRepository extends JpaRepository<Matrice, Long> {

    List<Matrice> findByEtatReception(EtatReception etatReception);

    List<Matrice> findByEtatValidation(EtatValidation etatValidation);
}
