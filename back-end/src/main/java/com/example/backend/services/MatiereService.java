package com.example.backend.services;
import org.springframework.scheduling.annotation.Scheduled;
import com.example.backend.dto.request.MatiereDTO;
import com.example.backend.dto.response.MatiereResponseDTO;
import com.example.backend.enumeration.DepartementEnum;
import com.example.backend.enumeration.GroupeEnum;
import com.example.backend.enumeration.NiveauEnum;
import com.example.backend.enumeration.SpecialiteEnum;
import com.example.backend.mapper.MatiereMapper;
import com.example.backend.models.Enseignant;
import com.example.backend.models.Matiere;
import com.example.backend.repositories.EnseignantRepository;
import com.example.backend.repositories.MatiereRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@Service
public class MatiereService {
    private final MatiereRepository matiereRepository;
    private final EnseignantRepository enseignantRepository;
    private final MatiereMapper matiereMapper;

    public MatiereService(MatiereRepository matiereRepository,
                          EnseignantRepository enseignantRepository,
                          MatiereMapper matiereMapper) {
        this.matiereRepository = matiereRepository;
        this.enseignantRepository = enseignantRepository;
        this.matiereMapper = matiereMapper;
    }

    public Matiere saveMatiere(MatiereDTO matiereDTO) {
        Matiere matiere = new Matiere();
        matiere.setNomMatiere(matiereDTO.getNomMatiere());
        matiere.setDepartement(DepartementEnum.valueOf(matiereDTO.getDepartement()));
        matiere.setSpecialite(SpecialiteEnum.valueOf(matiereDTO.getSpecialite()));
        matiere.setNiveau(NiveauEnum.valueOf(matiereDTO.getNiveau()));
        matiere.setGroupe(GroupeEnum.valueOf(matiereDTO.getGroupe()));

        Enseignant enseignant = enseignantRepository.findById(matiereDTO.getEnseignantId())
                .orElseThrow(() -> new RuntimeException("Enseignant not found"));
        matiere.setEnseignant(enseignant);

        return matiereRepository.save(matiere);
    }

    public List<MatiereResponseDTO> getAllMatieres() {
        return matiereRepository.findAll().stream()
                .map(matiere -> matiereMapper.toResponseDTO(matiere))
                .collect(Collectors.toList());
    }

    public List<MatiereResponseDTO> getMatieresByEnseignant(Long enseignantId) {
        return matiereRepository.findByEnseignantId(enseignantId).stream()
                .map(matiere -> matiereMapper.toResponseDTO(matiere))
                .collect(Collectors.toList());
    }

    /// Asma Update
     public List<Map<String,Object>> getFormattedMatiereStats(){
         List<Object[]> results = matiereRepository.getMatiereValideByDepartementAndNiveau();
         List<Map<String,Object>> formattedResults = new ArrayList<>();

         for (Object[] row : results) {
             Map<String, Object> map = new HashMap<>();
             map.put("departement", row[0] != null ? row[0].toString() : "Non spécifié");
             map.put("niveau", row[1] != null ? row[1].toString() : "Non spécifié");
             map.put("total", row[2] != null ? row[2] : 0);  // Assurer que "total" est un entier
             formattedResults.add(map);
         }
         return formattedResults;
     }

    /*@Scheduled(fixedRate = 10000)  // Toutes les 10s
        public void detectRecentUpdates() {
        List<Matiere> updatedMatieres = matiereRepository.findRecentValidatedOrReceived();

        for (Matiere matiere : updatedMatieres) {
            if (!recentMatieres.contains(matiere)) {
                recentMatieres.add(matiere);
            }
        }
    }
    public List<Matiere> getRecentValidatedOrReceived() {
        return matiereRepository.findRecentValidatedOrReceived();
    }*/
}
