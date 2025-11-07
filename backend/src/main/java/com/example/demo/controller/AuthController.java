package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtService;
import com.example.demo.service.CpfUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email já cadastrado.");
        }
        if (userRepository.existsByCpf(user.getCpf())) {
            return ResponseEntity.badRequest().body("CPF já cadastrado.");
        }
        if (!CpfUtils.isCPFValido(user.getCpf())) {
            return ResponseEntity.badRequest().body("CPF inválido.");
        }

        user.setSenhaHash(passwordEncoder.encode(user.getSenhaHash()));
        userRepository.save(user);
        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User login) {
        User user = userRepository.findByEmail(login.getEmail()).orElse(null);
        if (user == null || !passwordEncoder.matches(login.getSenhaHash(), user.getSenhaHash())) {
            return ResponseEntity.badRequest().body("Credenciais inválidas.");
        }

        String token = jwtService.generateToken(user.getEmail());
        return ResponseEntity.ok(Map.of(
                "token", token,
                "user", user
        ));
    }
}
