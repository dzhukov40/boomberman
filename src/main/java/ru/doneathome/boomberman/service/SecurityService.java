package ru.doneathome.boomberman.service;

import ru.doneathome.boomberman.security.service.JwtAuthenticationResponse;

/**
 *
 */
public interface SecurityService {

    /**
     * Ищем имя, текущего, залогиненного пользователя
     * @return
     */
    String findLoggedInUserName();

    /**
     * логинимся
     * @param username
     * @param password
     */
    String autoLogIn(String username, String password);

}
