package com.example.demo.dto;

import com.example.demo.model.User;

public record UserDTO(
    Long id,
    String nome,
    String email,
    String cpf,
    boolean verificado
) {
    public UserDTO(User u) {
        this(u.getId(), u.getNome(), u.getEmail(), u.getCpf(), u.isVerificado());
    }
}
