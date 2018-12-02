package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.ErrorType;

public class RegistrationException extends ErrorException {

    public RegistrationException() {
    }

    public RegistrationException(ErrorType errorType) {
        super(errorType);
    }

}
