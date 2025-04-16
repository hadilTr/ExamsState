package com.example.backend.services;

import com.example.backend.models.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.UUID;

@Service
public class JwtService {

    private final String SECRET_KEY = "your-256-bit-secret-key-of-at-least-32-characters";

    public String generateToken(User user) {


        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("role", user.getRole().toString())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                .setId(UUID.randomUUID().toString()) // Unique ID for each token
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }
}
