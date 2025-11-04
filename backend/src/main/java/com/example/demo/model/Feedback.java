package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "autor_id")
    private User autor;

    @ManyToOne
    @JoinColumn(name = "alvo_id")
    private User alvo;

    private String categoria;
    private String mensagem;
    private int nota; 
    private LocalDateTime dataCriacao = LocalDateTime.now();

    public Feedback() {}

    public Feedback(User autor, User alvo, String categoria, String mensagem, int nota) {
        this.autor = autor;
        this.alvo = alvo;
        this.categoria = categoria;
        this.mensagem = mensagem;
        this.nota = nota;
        this.dataCriacao = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public User getAutor() { return autor; }
    public void setAutor(User autor) { this.autor = autor; }
    public User getAlvo() { return alvo; }
    public void setAlvo(User alvo) { this.alvo = alvo; }
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }
    public int getNota() { return nota; }
    public void setNota(int nota) { this.nota = nota; }
    public LocalDateTime getDataCriacao() { return dataCriacao; }
    public void setDataCriacao(LocalDateTime dataCriacao) { this.dataCriacao = dataCriacao; }
}
