package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User extends BaseEntity {

    public static final String P_LOGIN = "login";
    public static final String P_PASSWORD = "password";

    /**
     * мя пользователя
     */
    @Column(columnDefinition = "login")
    private String login;
    /**
     * пароль пользователя
     */
    @Column(columnDefinition = "password")
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
