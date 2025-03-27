package com.example.backend.controllers;


import com.example.backend.models.Matiere;
import com.example.backend.services.MatiereService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/matieres")
public class MatiereController {
    private final MatiereService matiereService;

    public MatiereController(MatiereService matiereService) {
        this.matiereService = matiereService;
    }

    @GetMapping
    public List<Matiere> getAllMatieres() {
        return matiereService.getAllMatieres();
    }

    @PostMapping
    public Matiere addMatiere(@RequestBody Matiere matiere) {
        return matiereService.addMatiere(matiere);
    }
}
