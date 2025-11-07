package com.example.demo.controller;

import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.repository.FeedbackRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> criarFeedback(@RequestBody Feedback feedback) {
        // verifica se o autor e o alvo existem
        User autor = userRepository.findById(feedback.getAutor().getId()).orElse(null);
        User alvo = userRepository.findById(feedback.getAlvo().getId()).orElse(null);

        if (autor == null || alvo == null) {
            return ResponseEntity.badRequest().body("Autor ou alvo não encontrado.");
        }

        if (!autor.isVerificado()) {
            return ResponseEntity.badRequest().body("Apenas usuários verificados podem enviar feedbacks.");
        }

        feedback.setAutor(autor);
        feedback.setAlvo(alvo);
        feedbackRepository.save(feedback);

        return ResponseEntity.ok("Feedback criado com sucesso!");
    }

    @GetMapping("/{alvoId}")
    public ResponseEntity<List<Feedback>> listarFeedbacksPorAlvo(@PathVariable Long alvoId) {
        List<Feedback> feedbacks = feedbackRepository.findAll()
                .stream()
                .filter(f -> f.getAlvo().getId().equals(alvoId))
                .toList();
        return ResponseEntity.ok(feedbacks);
    }

    @GetMapping("/alvo/{alvoId}")
    public ResponseEntity<List<Feedback>> listarPorAlvo(@PathVariable Long alvoId) {
        List<Feedback> feedbacks = feedbackRepository.findByAlvoId(alvoId);
        return ResponseEntity.ok(feedbacks);
    }

}
