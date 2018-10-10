package ru.doneathome.boomberman.startPoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

// запустить сервер из консольки в проектре [ java -jar ./build/libs/boomberman.jar ]
// (*) [ gradle clean build && java -jar ./build/libs/boomberman.jar ]
// топаем на localhost:8070 - порт проставляется в [ applicapion.properties ]

@SpringBootApplication
@ComponentScan("ru.doneathome.boomberman")
@EnableJpaRepositories("ru.doneathome.boomberman")
@EntityScan("ru.doneathome.boomberman")
public class StartApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}
