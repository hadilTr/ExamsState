package com.example.backend.services;

import com.example.backend.dto.request.MatiereDTO;
import com.example.backend.dto.response.MatiereResponseDTO;
import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.NiveauEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import com.example.backend.mapper.MatiereMapper;
import com.example.backend.models.Enseignant;
import com.example.backend.models.Matiere;
import com.example.backend.repositories.EnseignantRepository;
import com.example.backend.repositories.MatiereRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class MatiereService {
    private final MatiereRepository matiereRepository;
    private final EnseignantRepository enseignantRepository;
    private final MatiereMapper matiereMapper;

    public MatiereService(MatiereRepository matiereRepository,
                          EnseignantRepository enseignantRepository,
                          MatiereMapper matiereMapper) {
        this.matiereRepository = matiereRepository;
        this.enseignantRepository = enseignantRepository;
        this.matiereMapper = matiereMapper;
    }

    public Matiere saveMatiere(MatiereDTO matiereDTO) {
        Matiere matiere = new Matiere();
        matiere.setNomMatiere(matiereDTO.getNomMatiere());
        matiere.setDepartement(DepartementEnum.valueOf(matiereDTO.getDepartement()));
        matiere.setSpecialite(SpecialiteEnum.valueOf(matiereDTO.getSpecialite()));
        matiere.setNiveau(NiveauEnum.valueOf(matiereDTO.getNiveau()));
        matiere.setGroupe(GroupeEnum.valueOf(matiereDTO.getGroupe()));

        Enseignant enseignant = enseignantRepository.findById(matiereDTO.getEnseignantId())
                .orElseThrow(() -> new RuntimeException("Enseignant not found"));
        matiere.setEnseignant(enseignant);

        return matiereRepository.save(matiere);
    }

    public List<MatiereResponseDTO> getAllMatieres() {
        return matiereRepository.findAll().stream()
                .map(matiere -> matiereMapper.toResponseDTO(matiere))
                .collect(Collectors.toList());
    }

    public List<MatiereResponseDTO> getMatieresByEnseignant(Long enseignantId) {
        return matiereRepository.findByEnseignantId(enseignantId).stream()
                .map(matiere -> matiereMapper.toResponseDTO(matiere))
                .collect(Collectors.toList());
    }
}
