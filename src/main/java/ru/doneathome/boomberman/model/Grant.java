package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.model.baseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema ="bomb",name = "grant")
public class Grant extends BaseEntity {

    public static final String P_GRANT_CODE = "grant_code";

    /**
     * код гранта
     */
    @Column(columnDefinition = P_GRANT_CODE)
    private String grantCode;

    public String getGrantCode() {
        return grantCode;
    }

    public void setGrantCode(String grantCode) {
        this.grantCode = grantCode;
    }
}
