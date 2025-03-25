package com.example.backend.controllers;

import com.example.backend.models.Enseignant;
import com.example.backend.models.Matrice;
import com.example.backend.services.EmailService;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/api/emails")
public class EmailController {
    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/confirmation")
    public String envoyerEmailConfirmation(
            @RequestParam String email,
            @RequestParam String nom,
            @RequestParam String matiere,
            @RequestParam String groupe,
            @RequestParam String statut) {

        Enseignant enseignant = new Enseignant();
        enseignant.setEmail(email);
        enseignant.setNom(nom);

        Matrice matrice = new Matrice();
        matrice.setMatiere(matiere);
        matrice.setGroupe(groupe);
        matrice.setEnseignants(Arrays.asList(enseignant));

        emailService.envoyerConfirmation(matrice, statut);

        return "Email de confirmation envoyé avec succès";
    }

}