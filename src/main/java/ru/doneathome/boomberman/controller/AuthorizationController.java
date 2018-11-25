package ru.doneathome.boomberman.controller;

import org.springframework.http.ResponseEntity;
import ru.doneathome.boomberman.DTO.UserDto;

/**
 * авторизация пользователя
 */
public interface AuthorizationController {

    /**
     *
     * @param userDto
     * @return возвращает JWT если такой пользователь есть
     */
    ResponseEntity<?> logIn(UserDto userDto);

    /**
     * регистрируем нового пользователя с таким паролем и логином
     * @param userDto
     * @return
     */
    ResponseEntity<?> registration(UserDto userDto);

    /**
     * разлогиневаемся
     */
    void logOut();

    /**
     * проверяем залогинены ли мы
     */
    Boolean isLogIn();

}
