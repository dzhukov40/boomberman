package ru.doneathome.boomberman.security.enums;

import java.util.EnumSet;

/**
 * У каждого пользователя есть набор различных прав, которые определяют,
 * что можно делать такому пользователю, а что нет
 */
public enum GrantType {

    // Создать игру
    CREATE_GAME("1"),

    // Смотреть игру
    WATCH_GAME("2"),

    // Читать общий чат
    READ_CHAT("3"),

    // Писать в общий чат
    WRITE_CHAT("4");


    private String code;

    private GrantType(String code) {
        this.code = code;
    }

    public static GrantType getByCode(String code) {
        EnumSet<GrantType> all = EnumSet.allOf(GrantType.class);
        for (GrantType type : all) {
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