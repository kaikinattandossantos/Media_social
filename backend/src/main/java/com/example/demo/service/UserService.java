package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User cadastrarUsuario(User user) {
        if (!CpfUtils.isCPFValido(user.getCpf())) {
            throw new IllegalArgumentException("CPF inválido.");
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email já cadastrado.");
        }

        if (userRepository.existsByCpf(user.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado.");
        }

        user.setVerificado(true); 
        return userRepository.save(user); 
    }
}
