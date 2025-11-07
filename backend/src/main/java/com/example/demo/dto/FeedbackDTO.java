package com.example.demo.dto;

import com.example.demo.model.Feedback;

public record FeedbackDTO(
    Long id,
    String categoria,
    String mensagem,
    int nota,
    String autorNome,
    String alvoNome
) {
    public FeedbackDTO(Feedback f) {
        this(
            f.getId(),
            f.getCategoria(),
            f.getMensagem(),
            f.getNota(),
            f.getAutor().getNome(),
            f.getAlvo().getNome()
        );
    }
}
