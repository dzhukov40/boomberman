package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.Error;

public class ValidationException extends ErrorException {

    public ValidationException() {
    }

    public ValidationException(Error error) {
        super(error);
    }
}
