package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.Error;

public class RegistrationException extends ErrorException {

    public RegistrationException() {
    }

    public RegistrationException(Error error) {
        super(error);
    }

}
