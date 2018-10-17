package ru.doneathome.boomberman.service.modelBuilders;

import ru.doneathome.boomberman.model.User;

public class UserBuilder {

    public static User getUser(Long id) {
        User user = new User();
        user.setId(id);
        return user;
    }

    public static User getUser(String login) {
        User user = new User();
        user.setLogin(login);
        return user;
    }

}
