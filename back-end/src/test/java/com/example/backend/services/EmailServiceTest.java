package com.example.backend.services;

import com.example.backend.models.Matrice;
import com.example.backend.models.Enseignant;
import com.example.backend.models.Matrice.EtatReception;
import com.example.backend.repositories.MatriceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Arrays;

import static org.mockito.Mockito.*;

public class EmailServiceTest {

    @Mock
    private JavaMailSender mailSender;

    @Mock
    private MatriceRepository matriceRepository;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testEnvoyerEmailConfirmation_EnAttente() {
        Matrice matrice = new Matrice();
        matrice.setMatiere("Mathématiques");
        matrice.setGroupe("G1");
        matrice.setEtatReception(EtatReception.EN_ATTENTE);

        Enseignant enseignant = new Enseignant();
        enseignant.setEmail("enseignantX@enicar.ucar.tn");
        enseignant.setNom("Monsieur X");

        matrice.setEnseignants(Arrays.asList(enseignant));

        when(matriceRepository.findByEtatReception(EtatReception.EN_ATTENTE))
                .thenReturn(Arrays.asList(matrice));

        emailService.envoyerConfirmation(matrice, "RECU");

        verify(mailSender, times(1)).send(any(SimpleMailMessage.class));
    }

    @Test
    public void testEnvoyerEmailAvertissement_EnRetard() {
        Matrice matrice = new Matrice();
        matrice.setMatiere("Physique");
        matrice.setGroupe("G2");
        matrice.setEtatReception(EtatReception.EN_RETARD);

        Enseignant enseignant = new Enseignant();
        enseignant.setEmail("Lamouchi@enicar.ucar.tn");
        enseignant.setNom("Madame Lamouchi");

        matrice.setEnseignants(Arrays.asList(enseignant));

        when(matriceRepository.findByEtatReception(EtatReception.EN_RETARD))
                .thenReturn(Arrays.asList(matrice));

        emailService.envoyerConfirmation(matrice, "EN_RETARD");

        verify(mailSender, times(1)).send(any(SimpleMailMessage.class));
    }
}
