package ru.doneathome.boomberman.exception;

import ru.doneathome.boomberman.error.ErrorType;

public abstract class ErrorException extends Exception {

    private ErrorType errorType;

    public ErrorException(){}

    public ErrorException(ErrorType errorType) {
        this.errorType = errorType;
    }

    public ErrorType getErrorType() {
        return errorType;
    }

    public void setErrorType(ErrorType errorType) {
        this.errorType = errorType;
    }

}
