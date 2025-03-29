package com.example.backend.models;
import com.example.backend.enums.Departement;
import com.example.backend.enums.Level;
import com.example.backend.enums.Speciality;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder

public class Groupe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private Speciality speciality;
    private Departement departement;
    private Level level;

}
