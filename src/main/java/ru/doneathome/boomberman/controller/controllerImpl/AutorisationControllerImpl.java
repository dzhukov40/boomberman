package ru.doneathome.boomberman.controller.controllerImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.doneathome.boomberman.DTO.UserDTO;
import ru.doneathome.boomberman.controller.AutorisationController;
import ru.doneathome.boomberman.mapper.Mapper;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.AuthorizationService;

@RestController
@RequestMapping("/autarisation")
public class AutorisationControllerImpl extends BaseControllerImpl implements AutorisationController {

    private static final Logger log = LoggerFactory.getLogger(AutorisationControllerImpl.class);

    @Autowired
    private AuthorizationService authorizationService;
    @Autowired
    private Mapper mapper;


    @RequestMapping(path = "logIn", method = RequestMethod.POST)
    @Override
    public void logIn(@RequestBody UserDTO userDTO) {
        User user = mapper.map(userDTO, User.class);
        log.info("мапинг прошел: " + user.getLogin() + " " + user.getPassword());
    }

    @RequestMapping(path = "logOut", method = RequestMethod.GET)
    @Override
    public void logOut() {

    }

    @RequestMapping(path = "isLogIn", method = RequestMethod.GET)
    @Override
    public Boolean isLogIn() {
        return null;
    }

}
