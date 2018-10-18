package ru.doneathome.boomberman.error;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum Error implements OperationErrorCode {

    INT002001("Логин уже занят"),
    INT002002("Такого пользователя нет");


    private static Map<String, Error> MAPPED_BY_NAME = Arrays.stream(values()).collect(Collectors.toMap(Enum::name, Function.identity()));
    private String pattern;

    Error(String pattern) {
        this.pattern = pattern;
    }

    @Override
    public String getCode() {
        return this.name();
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

    public static Error getByName(String name) {
        return MAPPED_BY_NAME.get(name);
    }

}
