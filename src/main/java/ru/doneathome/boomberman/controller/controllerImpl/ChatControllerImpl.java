package ru.doneathome.boomberman.controller.controllerImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.doneathome.boomberman.DTO.MessageDto;
import ru.doneathome.boomberman.controller.ChatController;

@RestController
@RequestMapping("/chat")
public class ChatControllerImpl extends BaseControllerImpl implements ChatController {

    private static final Logger log = LoggerFactory.getLogger(ChatControllerImpl.class);


    @Override
    @RequestMapping(path = "send", method = RequestMethod.POST)
    public ResponseEntity<?> sendMessage(@RequestBody MessageDto messageDto) {

        log.info("пук");
        return ResponseEntity.ok("пук");
    }

    @Override
    @RequestMapping(path = "get", method = RequestMethod.GET)
    public ResponseEntity<?> getMessage() {

        log.info("пук");
        return ResponseEntity.ok("пук");
    }
}
