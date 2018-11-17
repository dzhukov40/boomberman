package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(schema ="bomb",name = "user")
public class User extends BaseEntity {

    public static final String P_LOGIN = "login";
    public static final String P_PASSWORD = "password";
    public static final String P_ROLE_CODE = "role_code";

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
     * код роли пользователя
     */
    @Column(columnDefinition = P_ROLE_CODE)
    private String roleCode;
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

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }
}
