package com.example.backend.services;

import com.example.backend.models.Matrice;
import com.example.backend.models.Enseignant;
import com.example.backend.repositories.MatriceRepository;
import com.example.backend.repositories.EnseignantRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class EmailService {
    private final JavaMailSender mailSender;
    private final MatriceRepository matriceRepository;
    private final EnseignantRepository enseignantRepository;

    // Dates statiques
    private static final LocalDate DATE_LIMITE_VALIDATION = LocalDate.of(2025, 6, 20);
    private static final LocalDate DATE_LIMITE_VERIFICATION = LocalDate.of(2025, 4, 15);

    // Jours avant pour les rappels
    private static final int JOURS_AVANT_RAPPEL = 3;
    private static final int JOURS_AVANT_AVERTISSEMENT = 1;

    public EmailService(JavaMailSender mailSender, MatriceRepository matriceRepository, EnseignantRepository enseignantRepository) {
        this.mailSender = mailSender;
        this.matriceRepository = matriceRepository;
        this.enseignantRepository = enseignantRepository;
    }

    // Planification quotidienne à 8h du matin
    @Scheduled(cron = "0 0 8 * * ?")
    public void envoyerNotificationsAutomatiques() {
        LocalDate aujourdHui = LocalDate.now();

        // Envoi des rappels et avertissements pour la réception et la validation
        envoyerRappelsEtAvertissements(aujourdHui);
    }

    // Vérifie si les rappels doivent être envoyés (chaque 3 jours avant la limite)
    void envoyerRappelsEtAvertissements(LocalDate aujourdHui) {
        // Rechercher les matrices avec les états EN_ATTENTE
        List<Matrice> matricesReception = matriceRepository.findByEtatReception(Matrice.EtatReception.EN_ATTENTE);
        List<Matrice> matricesValidation = matriceRepository.findByEtatValidation(Matrice.EtatValidation.EN_ATTENTE);

        // Envoi des rappels pour la réception
        for (Matrice matrice : matricesReception) {
            long joursRestants = ChronoUnit.DAYS.between(aujourdHui, DATE_LIMITE_VERIFICATION);
            if (joursRestants <= JOURS_AVANT_RAPPEL) {
                envoyerRappel(matrice, joursRestants, "réception");
            }
        }

        // Envoi des avertissements pour la validation
        for (Matrice matrice : matricesValidation) {
            long joursRestants = ChronoUnit.DAYS.between(aujourdHui, DATE_LIMITE_VALIDATION);
            if (joursRestants <= JOURS_AVANT_AVERTISSEMENT) {
                envoyerAvertissement(matrice, joursRestants, "validation");
            }
        }
    }

    // Envoie un rappel par email
    private void envoyerRappel(Matrice matrice, long joursRestants, String type) {
        for (Enseignant enseignant : matrice.getEnseignants()) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(enseignant.getEmail());
            message.setSubject("Rappel: " + type + " des examens");
            message.setText(String.format(
                    "Bonjour %s,\n\n" +
                            "Il vous reste %d jours pour compléter la %s des examens.\n" +
                            "Date limite: %s\n\n" +
                            "Cordialement,\nDirection des études et du stage,",
                    enseignant.getNom(),
                    joursRestants,
                    type,
                    type.equals("réception") ? DATE_LIMITE_VERIFICATION : DATE_LIMITE_VALIDATION
            ));
            mailSender.send(message);
        }
    }

    // Envoie un avertissement par email
    private void envoyerAvertissement(Matrice matrice, long joursRestants, String type) {
        for (Enseignant enseignant : matrice.getEnseignants()) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(enseignant.getEmail());
            message.setSubject("Avertissement: Retard dans la " + type);
            message.setText(String.format(
                    "Bonjour %s,\n\n" +
                            "Vous avez des examens en retard pour la phase de %s.\n" +
                            "Date limite dépassée: %s\n\n" +
                            "Merci de régulariser au plus vite.\n\n" +
                            "Cordialement,\nDirection des études et du stage,",
                    enseignant.getNom(),
                    type,
                    type.equals("réception") ? DATE_LIMITE_VERIFICATION : DATE_LIMITE_VALIDATION
            ));
            mailSender.send(message);
        }
    }

    // Méthode pour envoyer une confirmation manuelle de réception ou validation
    public void envoyerConfirmation(Matrice matrice, String statut) {
        for (Enseignant enseignant : matrice.getEnseignants()) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(enseignant.getEmail());
            if ("RECU".equals(statut)) {
                message.setSubject("Confirmation de réception des examens");
                message.setText(String.format(
                        "Bonjour %s,\n\n" +
                                "Nous confirmons la réception des examens pour la matière %s.\n" +
                                "Groupe: %s\n\n" +
                                "Cordialement,\nDirection des études et du stage,",
                        enseignant.getNom(),
                        matrice.getMatiere(),
                        matrice.getGroupe()
                ));
            } else if ("VALIDE".equals(statut)) {
                message.setSubject("Confirmation de validation des examens");
                message.setText(String.format(
                        "Bonjour %s,\n\n" +
                                "Nous confirmons la validation des examens pour la matière %s.\n" +
                                "Groupe: %s\n\n" +
                                "Cordialement,\nDirection des études et du stage,",
                        enseignant.getNom(),
                        matrice.getMatiere(),
                        matrice.getGroupe()
                ));
            }
            mailSender.send(message);
        }
    }
}
