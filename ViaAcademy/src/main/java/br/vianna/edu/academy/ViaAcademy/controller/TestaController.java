package br.vianna.edu.academy.ViaAcademy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller //Controller automático
@RequestMapping("/testa")
public class TestaController {

    //@GetMapping("/home") //Não espera um parâmetro
    //public String chamaHome() {
        //return "home";
    //}
    @GetMapping({"home", "/home/{id}"}) //Espera um parâmetro
    public String chamaHome(@PathVariable(required = false) Integer id,
                            @RequestParam(required = false) String nome){ //Integer é uma classe, não pode ser nulo
        System.out.println(id + " - " + nome);
        return "home";
    }
}
