package br.vianna.edu.academy.ViaAcademy.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data //Getters e Setters automáticos
@AllArgsConstructor //Construtor com parâmetros
@NoArgsConstructor //Construtor sem parâmetros
public class Pessoa {
    private int id;
    private String nome, email, login, senha;
    private LocalDateTime dataUltimoAcesso;
}
