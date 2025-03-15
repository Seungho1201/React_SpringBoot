package com.example.ReactBoot.Test;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:5173")  // React 개발 서버의 주소
public class TestController {

    private final TestRepository testrepository;


    @GetMapping("/test3")
    public List<Test> test() {

        List<Test> tests = (List<Test>)testrepository.findAll();

        System.out.println(tests.get(0).getName());
        System.out.println(tests.get(0).getId());
        System.out.println(tests.get(0).getAge());

        return tests;
    }


}
