package ru.doneathome.boomberman.controller;

import ru.doneathome.boomberman.DTO.UserDTO;

/**
 * авторизация пользователя
 */
public interface AutorisationController {

    /**
     * логинемя
     * @param userDTO
     */
    void logIn(UserDTO userDTO);

    /**
     * разлогиневаемся
     */
    void logOut();

    /**
     * проверяем залогинены ли мы
     */
    Boolean isLogIn();

}
