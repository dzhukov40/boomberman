package ru.doneathome.boomberman.controller.controllerImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
// разрешение CORS нам нужно только для запуска [ node ./debugStaticServer.js ]
@CrossOrigin(origins = "http://127.0.0.1:3000") //TODO: перенести в properties
public class BaseControllerImpl {

}
