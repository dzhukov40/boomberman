package ru.doneathome.boomberman.service;

import ru.doneathome.boomberman.model.User;

/**
 * это сервис по работе с пользователями
 */
public interface UserService {

    User getUserById(Long userId);
    User getUserByLogin(String userLogin);
    Boolean checkUserExistByLogin(String userLogin);
    void createUser(User user);

}
