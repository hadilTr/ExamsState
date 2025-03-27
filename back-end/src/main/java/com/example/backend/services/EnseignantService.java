package com.example.backend.services;


import com.example.backend.dto.request.EnseignantDTO;
import com.example.backend.dto.response.EnseignantResponseDTO;
import com.example.backend.mapper.EnseignantMapper;
import com.example.backend.models.Enseignant;
import com.example.backend.models.Matiere;
import com.example.backend.repositories.EnseignantRepository;
import com.example.backend.repositories.MatiereRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
@Transactional
@Service
@RequiredArgsConstructor
public class EnseignantService {
    private final EnseignantRepository enseignantRepository;
    private final MatiereRepository matiereRepository;
    private final EnseignantMapper mapper;
    private final EnseignantMapper enseignantMapper;

    @Transactional
    public EnseignantResponseDTO createEnseignant(EnseignantDTO dto) {

        Enseignant enseignant = new Enseignant();
        enseignant.setNom(dto.getNom());
        enseignant.setEmail(dto.getEmail());
        enseignant.setMatieres(dto.getMatiereNoms());
        enseignant.setGroupe(dto.getGroupe());
        enseignant.setSpecialite(dto.getSpecialite());
        enseignant.setDepartement(dto.getDepartement());

        Enseignant saved = enseignantRepository.save(enseignant);

        return enseignantMapper.toResponseDTO(saved);
    }



    // DELETE
    public void deleteEnseignant(Long id) {
        if (!enseignantRepository.existsById(id)) {
            throw new EntityNotFoundException("Enseignant non trouvé avec l'ID : " + id);
        }
        enseignantRepository.deleteById(id);
    }




    // GET ALL
    public List<EnseignantResponseDTO> getAllEnseignants() {
        return enseignantRepository.findAll().stream()
                .map(enseignantMapper::toResponseDTO)
                .collect(Collectors.toList());
    }






    public EnseignantResponseDTO getEnseignantById(Long id) {
        return enseignantRepository.findById(id)
                .map(enseignantMapper::toResponseDTO) // Convertit Enseignant -> EnseignantResponseDTO
                .orElseThrow(() -> new EntityNotFoundException("Enseignant non trouvé"));
    }
}
