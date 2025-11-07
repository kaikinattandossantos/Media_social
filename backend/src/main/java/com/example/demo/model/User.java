package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(
    name = "users",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = "email"),
        @UniqueConstraint(columnNames = "cpf")
    }
) 
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senhaHash;
    private String cpf;
    private boolean verificado = false;
    private LocalDate dataCadastro = LocalDate.now();

   
    public User() {}

    public User(String nome, String email, String senhaHash, String cpf) {
        this.nome = nome;
        this.email = email;
        this.senhaHash = senhaHash;
        this.cpf = cpf;
        this.dataCadastro = LocalDate.now();
    }

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getSenhaHash() { return senhaHash; }
    public void setSenhaHash(String senhaHash) { this.senhaHash = senhaHash; }
    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }
    public boolean isVerificado() { return verificado; }
    public void setVerificado(boolean verificado) { this.verificado = verificado; }
    public LocalDate getDataCadastro() { return dataCadastro; }
    public void setDataCadastro(LocalDate dataCadastro) { this.dataCadastro = dataCadastro; }
}
