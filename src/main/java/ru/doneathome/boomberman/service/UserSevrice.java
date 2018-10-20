package ru.doneathome.boomberman.service;

import ru.doneathome.boomberman.model.User;

/**
 * это сервис по работе с пользователями
 */
public interface UserSevrice {

    User getUserById(Long userId);
    User getUserByLogin(String userLogin);
    void createUser(User user);

}
