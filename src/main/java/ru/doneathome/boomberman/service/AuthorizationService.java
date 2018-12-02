package ru.doneathome.boomberman.service;

import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;

public interface AuthorizationService {

    /**
     * Авторизиремся в системе, получаем JWT токен при успехе
     * @param user логин и пароль
     * @return получаем JWT токен
     * @throws ValidationException
     */
    String logIn(User user) throws ValidationException;

    /**
     * Выходим
     */
    void logOut();

    /**
     * Регистрируемся
     * @param user
     */
    void registration(User user) throws ValidationException;

    /**
     * Проверяем залогинены ли мы
     */
    Boolean isLogIn();


}
