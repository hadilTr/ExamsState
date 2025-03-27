package com.example.backend.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;
@Data
@Entity
public class Matiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;


}
