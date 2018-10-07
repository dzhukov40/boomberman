package ru.doneathome.boomberman.model;

public class User extends BaseEntity {
    /**
     * id сущности в базе
     */
    private Long id;
    /**
     * мя пользователя
     */
    private String login;
    /**
     * пароль пользователя
     */
    private String password;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
