package ru.doneathome.boomberman.startPoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// запустить сервер из консольки в проектре [ java -jar ./build/libs/boomberman.jar ]
// топаем на localhost:8070 - порт проставляется в [ applicapion.properties ]
@SpringBootApplication
public class StartApplication {
    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}
