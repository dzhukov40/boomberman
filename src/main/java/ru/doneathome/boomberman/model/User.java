package ru.doneathome.boomberman.model;

public class User extends BaseEntity {
    /**
     * id сущности в базе
     */
    private Long id;
    /**
     * мя пользователя
     */
    private String name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
