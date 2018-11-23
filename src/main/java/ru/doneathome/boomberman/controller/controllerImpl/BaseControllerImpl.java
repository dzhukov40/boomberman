package ru.doneathome.boomberman.controller.controllerImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
// разрешение CORS нам нужно только для запуска [ node ./debugStaticServer.js ]
@CrossOrigin(origins = "*") //TODO: надо при отладки фронта при помощи сервера на node
public class BaseControllerImpl {

}
