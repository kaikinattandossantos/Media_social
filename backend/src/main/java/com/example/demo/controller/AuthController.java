package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.CpfUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

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
        if (user.getSenhaHash().length() < 6) {
            return ResponseEntity.badRequest().body("A senha deve ter pelo menos 6 caracteres.");
        }
        if (user.getNome().isEmpty()) {
            return ResponseEntity.badRequest().body("O nome não pode ser vazio.");
        }

        userRepository.save(user);
        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User login) {
        User user = userRepository.findByEmail(login.getEmail()).orElse(null);

        if (user == null || !user.getSenhaHash().equals(login.getSenhaHash())) {
            return ResponseEntity.badRequest().body("Credenciais inválidas.");
        }

        return ResponseEntity.ok(user);
    }
}
