package com.example.backend.models;

import com.example.backend.enumeration.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Matiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomMatiere;

    @Enumerated(EnumType.STRING)
    private DepartementEnum departement;

    @Enumerated(EnumType.STRING)
    private SpecialiteEnum specialite;

    @Enumerated(EnumType.STRING)
    private NiveauEnum niveau;

    @Enumerated(EnumType.STRING)
    private GroupeEnum groupe;

    @ManyToOne
    @JoinColumn(name = "enseignant_id")
    private Enseignant enseignant;
}
