package com.example.backend.dto.response;

import com.example.backend.enumeration.*;
import lombok.Data;

@Data
public class EnseignantResponseDTO {
    private Long id;
    private String nom;
    private String email;
    private DepartementEnum departement;
    private SpecialiteEnum specialite;
    private NiveauEnum niveau;
    private GroupeEnum groupe;
}
