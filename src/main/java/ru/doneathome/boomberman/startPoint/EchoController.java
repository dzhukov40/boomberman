package ru.doneathome.boomberman.startPoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/echo")
public class EchoController extends BaseController{
    private static final Logger log = LoggerFactory.getLogger(EchoController.class);

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody String getPipe() {
        log.info("был запросик");

        return "Hello world!";
    }
}
