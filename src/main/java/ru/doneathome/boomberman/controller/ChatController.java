package ru.doneathome.boomberman.controller;

import ru.doneathome.boomberman.DTO.MessageDto;

/**
 * модуль для отправки и получения сообщений пользователями
 */
public interface ChatController {
    /**
     * отправляем сообщение
     * @param messageDto
     */

    void sendMessage(MessageDto messageDto);

}
