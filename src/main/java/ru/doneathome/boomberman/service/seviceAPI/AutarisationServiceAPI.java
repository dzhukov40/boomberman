package ru.doneathome.boomberman.service.seviceAPI;

import ru.doneathome.boomberman.model.User;

public interface AutarisationServiceAPI {

    /**
     * логинемя
     * @param user
     */
    void logIn(User user);

    /**
     * разлогиневаемся
     */
    void logOut();

    /**
     * проверяем залогинены ли мы
     */
    Boolean isLogIn();


}
