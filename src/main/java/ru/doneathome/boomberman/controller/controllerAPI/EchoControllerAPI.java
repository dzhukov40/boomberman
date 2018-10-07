package ru.doneathome.boomberman.controller.controllerAPI;

/**
 * модуль для тестово пинга бека приложения
 */
public interface EchoControllerAPI {

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
