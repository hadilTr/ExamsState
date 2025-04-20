package com.example.backend.services;

import com.example.backend.models.EmailLog;
import com.example.backend.repositories.EmailLogRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    private final EmailLogRepository emailLogRepository; // 🆕

    public EmailService(JavaMailSender mailSender ,  EmailLogRepository emailLogRepository) {
        this.mailSender = mailSender;
        this.emailLogRepository = emailLogRepository;

    }

    public void sendCredentials(String toEmail, String username, String rawPassword) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();


        message.setTo(toEmail);
        message.setSubject("Your ENICarthage Account Credentials");
        message.setText(
                "Your account has been created by the admin.\n\n" +
                        "Username: " + username + "\n" +
                        "Temporary Password: " + rawPassword + "\n\n" +
                        "Please change your password after logging in.\n"

        );

        mailSender.send(message);
            // Sauvegarder dans EmailLog
            EmailLog log = new EmailLog();
            log.setToEmail(toEmail);
            log.setSubject(message.getSubject());
            log.setContent(message.getText());
            log.setDateSent(LocalDateTime.now());
            emailLogRepository.save(log);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void sendNotificationToTeacher(String toEmail, String teacherName) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Notification ENICarthage - Matières Assignées");
            message.setText(
                    "Dear " + teacherName + ",\n\n" +
                            "SVP rajaaa3 l examen.\n\n" +
                            "ENICarthage Administration"
            );
            mailSender.send(message);

            // Sauvegarder dans EmailLog
            EmailLog log = new EmailLog();
            log.setToEmail(toEmail);
            log.setSubject(message.getSubject());
            log.setContent(message.getText());
            log.setDateSent(LocalDateTime.now());
            emailLogRepository.save(log);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
