package com.example.backend.dto.response;

import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor // <-- Ajoutez cette annotation
@AllArgsConstructor
public class EnseignantResponseDTO {
    private Long id;
    private String nom;
    private String email;
    private List<String> matieres; // Noms des matières (pas les IDs)
    private GroupeEnum groupe;
    private SpecialiteEnum specialite;
    private DepartementEnum departement;
}
