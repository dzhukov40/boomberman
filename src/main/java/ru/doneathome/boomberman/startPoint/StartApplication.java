package ru.doneathome.boomberman.startPoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// запустить сервер из консольки в проектре [ java -jar ./build/libs/boomberman.jar ]
@SpringBootApplication
public class StartApplication {
    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}
