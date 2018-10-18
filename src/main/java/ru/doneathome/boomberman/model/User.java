package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema ="boomb",name = "user")
public class User extends BaseEntity {

    public static final String P_LOGIN = "login";
    public static final String P_PASSWORD = "password";
    public static final String P_IS_CONFIRMED = "is_confirmed";

    /**
     * мя пользователя
     */
    @Column(columnDefinition = P_LOGIN)
    private String login;
    /**
     * пароль пользователя
     */
    @Column(columnDefinition = P_PASSWORD)
    private String password;
    /**
     * флаг что пользователь подтвердил почту, которая логин
     */
    @Column(columnDefinition = P_IS_CONFIRMED)
    private Boolean confirmed;


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

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}
