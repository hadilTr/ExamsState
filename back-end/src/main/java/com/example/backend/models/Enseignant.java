package com.example.backend.models;

import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.NiveauEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Enseignant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String email;

   @ElementCollection
    @CollectionTable(name = "enseignant_matieres", joinColumns = @JoinColumn(name = "enseignant_nom"))
    @Column(name = "matiere_nom") // Nom de la colonne dans la table de jointure
    private List<String> matieres;


  /*@OneToMany(cascade = CascadeType.ALL) // Cascade pour propager l'ajout/suppression des matières
  @JoinColumn(name = "enseignant_id") // Colonne de jointure dans la table Matiere
  private List<Matiere> matieres;*/

    @Enumerated(EnumType.STRING)
    private GroupeEnum groupe;

    @Enumerated(EnumType.STRING)
    private NiveauEnum niveau;

    @Enumerated(EnumType.STRING)
    private SpecialiteEnum specialite;

    @Enumerated(EnumType.STRING)
    private DepartementEnum departement;
}
