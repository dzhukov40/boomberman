package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema ="boomb",name = "role")
public class Role extends BaseEntity {

    public static final String P_NAME = "name";


    /**
     * имя роли
     */
    @Column(columnDefinition = P_NAME)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
