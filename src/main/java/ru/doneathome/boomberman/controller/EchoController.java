package ru.doneathome.boomberman.controller;

/**
 * модуль для тестово пинга бека приложения
 */
public interface EchoController {

    /**
     * метод должен вернуть строку 'hello world!'
     * @return
     */
    String echo();

    /**
     * метод принимает строчку и возвращает ее назад
     * @param arg
     * @return
     */
    String echo(String arg);
}
