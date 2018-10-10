package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User extends BaseEntity {
    /**
     * мя пользователя
     */
    private String login;
    /**
     * пароль пользователя
     */
    private String password;


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
