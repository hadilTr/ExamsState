package com.example.backend.dto.request;

import lombok.Data;

@Data
public class MatiereDTO {
    private String nomMatiere;
    private String departement;
    private String specialite;
    private String niveau;
    private String groupe;
    private Long enseignantId;
    private Boolean recu ;
    private Boolean valide ;
}
