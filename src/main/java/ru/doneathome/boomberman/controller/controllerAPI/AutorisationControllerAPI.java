package ru.doneathome.boomberman.controller.controllerAPI;

import ru.doneathome.boomberman.DTO.UserDTO;

/**
 * авторизация пользователя
 */
public interface AutorisationControllerAPI {

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