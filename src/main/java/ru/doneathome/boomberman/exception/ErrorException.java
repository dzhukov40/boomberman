package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.Error;

public abstract class ErrorException extends Exception {

    private Error error;

    public ErrorException(){}

    public ErrorException(Error error) {
        this.error = error;
    }

    public Error getError() {
        return error;
    }

    public void setError(Error error) {
        this.error = error;
    }

}
