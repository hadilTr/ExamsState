package com.example.backend.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

@Entity
@Table
public class User {
    @Id
    @SequenceGenerator(
            name="user_sequence",sequenceName = "user_sequence",allocationSize=1)
    @GeneratedValue(
            strategy =GenerationType.SEQUENCE,
            generator ="user_sequence" )

    private Long id;
    //@Transient in case  don't want the firstName to be saved in the DB
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private Long phone ;
    private String username;
    private String password;

    public User(String firstName, String lastName, String email, String role, Long phone, String username, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }

}