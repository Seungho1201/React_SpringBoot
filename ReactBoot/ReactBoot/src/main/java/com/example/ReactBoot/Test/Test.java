package com.example.ReactBoot.Test;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Test {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer id;
    private String name;
    private int age;
}
