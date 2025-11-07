package com.example.demo.controller;

import com.example.demo.dto.FeedbackDTO;
import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.repository.FeedbackRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {

    @Autowired private FeedbackRepository feedbackRepository;
    @Autowired private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> criarFeedback(@RequestBody Feedback feedback) {
        User autor = userRepository.findById(feedback.getAutor().getId()).orElse(null);
        User alvo = userRepository.findById(feedback.getAlvo().getId()).orElse(null);

        if (autor == null || alvo == null) {
            return ResponseEntity.badRequest().body("Autor ou alvo não encontrado.");
        }

        feedback.setAutor(autor);
        feedback.setAlvo(alvo);
        feedbackRepository.save(feedback);

        return ResponseEntity.ok(new FeedbackDTO(feedback));
    }

    @GetMapping("/alvo/{id}")
    public List<FeedbackDTO> listarPorAlvo(@PathVariable Long id) {
        return feedbackRepository.findByAlvoId(id)
                .stream()
                .map(FeedbackDTO::new)
                .toList();
    }

    @GetMapping("/recentes")
    public List<FeedbackDTO> recentes() {
        return feedbackRepository.findAll(Sort.by(Sort.Direction.DESC, "dataCriacao"))
                .stream()
                .limit(10)
                .map(FeedbackDTO::new)
                .toList();
    }
}
