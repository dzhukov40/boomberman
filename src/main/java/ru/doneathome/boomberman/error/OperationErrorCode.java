package ru.doneathome.boomberman.error;

public interface OperationErrorCode {

    String getCode();

    String getPattern();

    String format(Object... args);

}
