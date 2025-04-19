package com.example.backend.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendCredentials(String toEmail, String username, String rawPassword) {
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
    }


    public void sendNotificationToTeacher(String toEmail, String teacherName) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Notification  ENICarthage - Matières Assignées");
        message.setText(
                "Dear " + teacherName + ",\n\n" +
                        ".\n\n" +
                        "SVP rajaaa3 l examen.\n\n" +
                        "ENICarthage Administration"
        );
        mailSender.send(message);
    }
}
