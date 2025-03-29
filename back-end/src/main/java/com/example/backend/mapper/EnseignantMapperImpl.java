package com.example.backend.mapper;

import com.example.backend.dto.request.EnseignantDTO;
import com.example.backend.dto.response.EnseignantResponseDTO;
import com.example.backend.models.Enseignant;
import com.example.backend.models.Matiere;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EnseignantMapperImpl implements EnseignantMapper {

    @Override
    public EnseignantResponseDTO toResponseDTO(Enseignant enseignant) {
        if (enseignant == null) {
            return null;
        }



        return EnseignantResponseDTO.builder()
                .id(enseignant.getId())
                .nom(enseignant.getNom())
                .email(enseignant.getEmail())
                .matieres(enseignant.getMatieres())
                .groupe(enseignant.getGroupe())
                .niveau(enseignant.getNiveau())
                .specialite(enseignant.getSpecialite())
                .departement(enseignant.getDepartement())
                .build();
    }


    @Override
    public Enseignant toEntity(EnseignantDTO dto) {
        if (dto == null) {
            return null;
        }

        Enseignant enseignant = new Enseignant();
        enseignant.setNom(dto.getNom());
        enseignant.setEmail(dto.getEmail());
        enseignant.setGroupe(dto.getGroupe());
        enseignant.setNiveau(dto.getNiveau());
        enseignant.setSpecialite(dto.getSpecialite());
        enseignant.setDepartement(dto.getDepartement());


        return enseignant;
    }
}
