package com.example.backend.dto.response;

import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.NiveauEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import com.example.backend.models.Matiere;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnseignantResponseDTO {
    private Long id;
    private String nom;
    private String email;
    private List<String> matieres;
    private GroupeEnum groupe;
    private NiveauEnum niveau;
    private SpecialiteEnum specialite;
    private DepartementEnum departement;
}
