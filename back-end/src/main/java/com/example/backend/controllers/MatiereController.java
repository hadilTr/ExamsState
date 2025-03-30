package com.example.backend.controllers;

import com.example.backend.dto.request.MatiereDTO;
import com.example.backend.dto.response.MatiereResponseDTO;
import com.example.backend.mapper.MatiereMapper;
import com.example.backend.services.MatiereService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matieres")
public class MatiereController {
    private final MatiereService matiereService;
    private final MatiereMapper matiereMapper;

    public MatiereController(MatiereService matiereService, MatiereMapper matiereMapper) {
        this.matiereService = matiereService;
        this.matiereMapper = matiereMapper;
    }

    @PostMapping
    public MatiereResponseDTO saveMatiere(@RequestBody MatiereDTO matiereDTO) {
        return matiereMapper.toResponseDTO(matiereService.saveMatiere(matiereDTO));
    }

    @GetMapping
    public List<MatiereResponseDTO> getAllMatieres() {
        return matiereService.getAllMatieres();
    }

    @GetMapping("/enseignant/{enseignantId}")
    public List<MatiereResponseDTO> getMatieresByEnseignant(@PathVariable Long enseignantId) {
        return matiereService.getMatieresByEnseignant(enseignantId);
    }
}
