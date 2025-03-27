package com.example.backend.controllers;


import com.example.backend.dto.request.EnseignantDTO;
import com.example.backend.dto.response.EnseignantResponseDTO;
import com.example.backend.models.Enseignant;
import com.example.backend.services.EnseignantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/enseignants")

public class EnseignantController {
    private final EnseignantService enseignantService;

    public EnseignantController(EnseignantService enseignantService) {
        this.enseignantService = enseignantService;
    }


    @GetMapping
    public ResponseEntity<List<EnseignantResponseDTO>> getAllEnseignants() {
        return ResponseEntity.ok(enseignantService.getAllEnseignants());
    }



    @GetMapping("/{id}")
    public ResponseEntity<EnseignantResponseDTO> getEnseignant(@PathVariable Long id) {
        EnseignantResponseDTO response = enseignantService.getEnseignantById(id);
        return ResponseEntity.ok(response);
    }



    @PostMapping
    public ResponseEntity<EnseignantResponseDTO> createEnseignant(
            @Valid @RequestBody EnseignantDTO dto
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(enseignantService.createEnseignant(dto));
    }



    // Méthode DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnseignant(@PathVariable Long id) {
        enseignantService.deleteEnseignant(id);
        return ResponseEntity.noContent().build();
    }
}
