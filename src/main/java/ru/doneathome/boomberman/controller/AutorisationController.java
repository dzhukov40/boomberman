package ru.doneathome.boomberman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.doneathome.boomberman.DTO.UserDTO;
import ru.doneathome.boomberman.controller.controllerAPI.AutorisationControllerAPI;
import ru.doneathome.boomberman.service.seviceAPI.AutarisationServiceAPI;

@RestController
@RequestMapping("/autarisation")
public class AutorisationController extends BaseController implements AutorisationControllerAPI {

    @Autowired
    private AutarisationServiceAPI autarisationService;


    @RequestMapping(path = "logIn", method = RequestMethod.POST)
    @Override
    public void logIn(@RequestBody UserDTO userDTO) {

        // мапим дозером dto -> User Entity

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
