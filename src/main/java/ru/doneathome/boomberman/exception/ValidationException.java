package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.ErrorType;

public class ValidationException extends ErrorException {

    public ValidationException() {
    }

    public ValidationException(ErrorType errorType) {
        super(errorType);
    }
}
