package com.example.backend.mapper;

import com.example.backend.dto.request.EnseignantDTO;
import com.example.backend.dto.response.EnseignantResponseDTO;
import com.example.backend.models.Enseignant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


public interface EnseignantMapper {
    Enseignant toEntity(EnseignantDTO dto);

    EnseignantResponseDTO toResponseDTO(Enseignant enseignant);
}
