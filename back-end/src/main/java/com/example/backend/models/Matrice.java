package com.example.backend.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "matrices")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Matrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String groupe;
    private String matiere;

    public enum Type { RECEPTION, VALIDATION }
    public enum EtatReception { EN_ATTENTE, RECU, EN_RETARD }
    public enum EtatValidation { EN_ATTENTE, VALIDE, EN_RETARD }

    @Enumerated(EnumType.STRING)
    private Type type;

    @Enumerated(EnumType.STRING)
    private EtatReception etatReception;

    @Enumerated(EnumType.STRING)
    private EtatValidation etatValidation;

    @ManyToMany
    @JoinTable(
            name = "enseignant_matrice",
            joinColumns = @JoinColumn(name = "matrice_id"),
            inverseJoinColumns = @JoinColumn(name = "enseignant_id")
    )
    private List<Enseignant> enseignants;
}

