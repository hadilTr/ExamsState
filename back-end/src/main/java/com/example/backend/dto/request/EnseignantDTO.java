package com.example.backend.dto.request;

import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.NiveauEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import com.example.backend.models.Matiere;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class EnseignantDTO {
    @JsonProperty("nom")
    @NotBlank private String nom;
    @Email
    @NotBlank  private String email;
    @NotEmpty
    private List<String> matiereNoms;
    @NotNull private GroupeEnum groupe;
    @NotNull private NiveauEnum niveau;
    @NotNull private SpecialiteEnum specialite;
    @NotNull private DepartementEnum departement;
}
