package ru.doneathome.boomberman.error;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum ErrorType implements OperationErrorCode {

    INT002001("INT002001", "Логин уже занят"),
    INT002002("INT002002", "Такого пользователя нет"),
    INT002003("INT002003", "Пароль не подходит");


    private static Map<String, ErrorType> MAPPED_BY_NAME = Arrays.stream(values()).collect(Collectors.toMap(Enum::name, Function.identity()));
    private String code;
    private String pattern;

    ErrorType(String code, String pattern) {
        this.code = code;
        this.pattern = pattern;
    }

    @Override
    public String getCode() {
        return code;
    }

    @Override
    public String getPattern() {
        return pattern;
    }

    @Override
    public String format(Object... args) {
        if (args != null && args.length != 0) {
            return String.format(pattern, args);
        } else {
            return getPattern();
        }
    }

    public static ErrorType getByName(String name) {
        return MAPPED_BY_NAME.get(name);
    }

}
