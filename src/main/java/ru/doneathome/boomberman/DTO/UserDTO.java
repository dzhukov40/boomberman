package ru.doneathome.boomberman.DTO;

public class UserDTO {
    /**
     * логин пользователя
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
