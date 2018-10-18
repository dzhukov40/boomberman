package ru.doneathome.boomberman.service.seviceAPI;

import ru.doneathome.boomberman.exception.RegistrationException;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;

public interface AuthorizationService {

    /**
     * Входим
     * @param user
     */
    void logIn(User user) throws ValidationException;

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
