package com.example.backend.mapper;

import com.example.backend.dto.request.MatiereDTO;
import com.example.backend.dto.response.MatiereResponseDTO;
import com.example.backend.models.Matiere;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MatiereMapper {


    @Mapping(target = "departement", source = "matiere", qualifiedByName = "mapDepartement")
    @Mapping(target = "specialite", source = "matiere", qualifiedByName = "mapSpecialite")
    @Mapping(target = "niveau", source = "matiere", qualifiedByName = "mapNiveau")
    @Mapping(target = "groupe", source = "matiere", qualifiedByName = "mapGroupe")
    @Mapping(target = "enseignantId", source = "matiere.enseignant.id")
    @Mapping(target = "enseignantNom", source = "matiere.enseignant.nom")
    @Mapping(target = "enseignantEmail", source = "matiere.enseignant.email")
    MatiereResponseDTO toResponseDTO(Matiere matiere);

    @Named("mapDepartement")
    default String mapDepartement(Matiere matiere) {
        return matiere.getDepartement() != null ? matiere.getDepartement().name() : null;
    }

    @Named("mapSpecialite")
    default String mapSpecialite(Matiere matiere) {
        return matiere.getSpecialite() != null ? matiere.getSpecialite().name() : null;
    }

    @Named("mapNiveau")
    default String mapNiveau(Matiere matiere) {
        return matiere.getNiveau() != null ? matiere.getNiveau().name() : null;
    }

    @Named("mapGroupe")
    default String mapGroupe(Matiere matiere) {
        return matiere.getGroupe() != null ? matiere.getGroupe().name() : null;
    }


}
