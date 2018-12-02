package ru.doneathome.boomberman.controller.controllerImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.doneathome.boomberman.controller.EchoController;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.repository.UserRepository;

@RestController
@RequestMapping("/echo")
public class EchoControllerImpl extends BaseControllerImpl implements EchoController {
    private static final Logger log = LoggerFactory.getLogger(EchoControllerImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody String echo() {
        log.info("был запросик");

        return "Hello world!";
    }

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody String echo(@RequestBody String arg) {
        log.info("был запросик: " + arg);

        return arg;
    }


    @RequestMapping(path = "/getUser", method = RequestMethod.GET)
    public @ResponseBody User getUser() {
        log.info("был запросик: ");

        Long id = 1L;

        return userRepository.findById(id).orElse(new User());
    }

}
