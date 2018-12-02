package ru.doneathome.boomberman.controller;

import org.springframework.http.ResponseEntity;
import ru.doneathome.boomberman.error.ErrorType;

public class HttpResponseEntityBuilder {

    public static ResponseEntity ErrorResponse(ErrorType error){
        return ResponseEntity.ok(new HttResponse(error.getCode(), error.getPattern()));
    }

    public static ResponseEntity ErrorResponse(ErrorType error, String msg){
        return ResponseEntity.ok(new HttResponse(error.getCode(), msg));
    }

    public static ResponseEntity OkResponse(String header, String msg){
        return ResponseEntity.ok(new HttResponse(header, msg));
    }
}
