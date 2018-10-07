package ru.doneathome.boomberman.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import ru.doneathome.boomberman.controller.controllerAPI.EchoControllerAPI;

@RestController
@RequestMapping("/echo")
public class EchoController extends BaseController implements EchoControllerAPI {
    private static final Logger log = LoggerFactory.getLogger(EchoController.class);

    @RequestMapping(method = RequestMethod.GET)
    @Override
    public @ResponseBody String echo() {
        log.info("был запросик");

        return "Hello world!";
    }


    @RequestMapping(method = RequestMethod.POST)
    @Override
    public @ResponseBody String echo(@RequestBody String arg) {
        log.info("был запросик: " + arg);

        return arg;
    }

}
