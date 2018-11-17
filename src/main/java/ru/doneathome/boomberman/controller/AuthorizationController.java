package ru.doneathome.boomberman.controller;

import org.springframework.http.ResponseEntity;
import ru.doneathome.boomberman.DTO.UserDTO;

/**
 * авторизация пользователя
 */
public interface AuthorizationController {

    /**
     *
     * @param userDTO
     * @return возвращает JWT если такой пользователь есть
     */
    ResponseEntity<?> logIn(UserDTO userDTO);

    /**
     * регистрируем нового пользователя с таким паролем и логином
     * @param userDTO
     * @return
     */
    ResponseEntity<?> registration(UserDTO userDTO);

    /**
     * разлогиневаемся
     */
    void logOut();

    /**
     * проверяем залогинены ли мы
     */
    Boolean isLogIn();

}
