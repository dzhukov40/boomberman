package ru.doneathome.boomberman.service;


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
    String authenticate(String username, String password);

}
