package ru.doneathome.boomberman.model;

import java.util.EnumSet;

/**
 * роли пользователя, роли мы храним в базе, это варианты ролей пользователя
 */
public enum RoleType {

    // Администратор
    ADMIN("1"),
    // Обычный пользователь
    USER("2");


    private String code;

    private RoleType(String code) {
        this.code = code;
    }

    public static RoleType getByCode(String code) {
        EnumSet<RoleType> all = EnumSet.allOf(RoleType.class);
        for (RoleType type : all) {
            if (type.code.equals(code)) {
                return type;
            }
        }
        return null;
    }

    public String getCode() {
        return code;
    }
    
}
