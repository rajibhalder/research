package com.wisetech.developer.demo1.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "redirect:/index";
    }

    @RequestMapping("/index")
    public String index(Model model) {
        System.out.println("Hello World !");
        return "index";
    }

    @RequestMapping("/home")
    public String login(Model model) {
        System.out.println("Hello World !");
        return "home";
    }
}
