package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(schema ="bomb",name = "user")
public class User extends BaseEntity {

    public static final String P_LOGIN = "login";
    public static final String P_PASSWORD = "password";

    /**
     * Имя пользователя
     */
    @Column(columnDefinition = P_LOGIN)
    private String login;
    /**
     * Пароль пользователя
     */
    @Column(columnDefinition = P_PASSWORD)
    private String password;
    /**
     * Роли пользователя
     */
    @ManyToMany()
    @JoinTable(name = "bomb.user_grant",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles;
    /**
     * Права пользователя
     */
    @ManyToMany()
    @JoinTable(name = "bomb.user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "grant_id"))
    private List<Grant> grants;



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

    public List<Grant> getGrants() {
        return grants;
    }

    public void setGrants(List<Grant> grants) {
        this.grants = grants;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
}
