package com.example.backend.services;

import com.example.backend.models.Matiere;
import com.example.backend.repositories.MatiereRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatiereService {
    private final MatiereRepository matiereRepository;

    public MatiereService(MatiereRepository matiereRepository) {
        this.matiereRepository = matiereRepository;
    }

    public List<Matiere> getAllMatieres() {
        return matiereRepository.findAll();
    }

    public Matiere addMatiere(Matiere matiere) {
        return matiereRepository.save(matiere);
    }
}
