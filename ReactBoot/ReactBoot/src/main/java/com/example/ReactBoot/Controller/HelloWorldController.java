package com.example.ReactBoot.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")  // React 개발 서버의 주소
public class HelloWorldController {

    @GetMapping("/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/test")
    public String test2() {
        return "테스트 데이터 전달";
    }
}