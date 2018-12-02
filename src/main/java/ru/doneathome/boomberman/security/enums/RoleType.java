package ru.doneathome.boomberman.security.enums;

import java.util.EnumSet;

/**
 * У каждого пользователя есть набор ролей которые, определяют, 
 * что можно, а что нельзя пользователю в системе
 */
public enum RoleType {

    // администратор
    ADMIN("1"),

    // Пользователь
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
