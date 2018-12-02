package ru.doneathome.boomberman.controller;

import org.springframework.http.ResponseEntity;
import ru.doneathome.boomberman.DTO.MessageDto;

/**
 * модуль для отправки и получения сообщений пользователями
 */
public interface ChatController {
    /**
     * отправляем сообщение
     * @param messageDto
     */
    ResponseEntity<?> sendMessage(MessageDto messageDto);

    /**
     * получаем пук, если пользователь авторизирован
     * @return
     */
    ResponseEntity<?> getMessage();

}
