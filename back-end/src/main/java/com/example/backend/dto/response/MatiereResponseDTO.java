package com.example.backend.dto.response;

import lombok.Data;

@Data
public class MatiereResponseDTO {
    private Long id;
    private String nomMatiere;
    private String departement;
    private String specialite;
    private String niveau;
    private String groupe;
    private Long enseignantId;
    private String enseignantNom;
    private String enseignantEmail;
    private Boolean recu ;
    private Boolean valide ;

}
