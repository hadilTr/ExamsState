package com.example.backend.models;

import com.example.backend.enumeration.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

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
    private Boolean recu ;
    private Boolean valide ;

    @Enumerated(EnumType.STRING)
    private NiveauEnum niveau;

    @Enumerated(EnumType.STRING)
    private GroupeEnum groupe;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "enseignant_id")
    private Enseignant enseignant;
}
