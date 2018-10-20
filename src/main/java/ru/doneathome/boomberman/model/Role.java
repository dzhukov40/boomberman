package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema ="boomb",name = "role")
public class Role extends BaseEntity {

    public static final String P_ROLE_CODE = "role_code";

    /**
     * код роли
     */
    @Column(columnDefinition = P_ROLE_CODE)
    private String roleCode;

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }
}
