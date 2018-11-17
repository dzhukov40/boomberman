package ru.doneathome.boomberman.controller.controllerImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.doneathome.boomberman.DTO.UserDTO;
import ru.doneathome.boomberman.controller.AuthorizationController;
import ru.doneathome.boomberman.controller.HttpResponseEntityBuilder;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.mapper.Mapper;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.security.enums.RoleType;
import ru.doneathome.boomberman.service.AuthorizationService;
import ru.doneathome.boomberman.service.UserService;
import ru.doneathome.boomberman.service.seviceImpl.UserServiceImpl;

import static ru.doneathome.boomberman.error.ErrorType.INT002001;
import static ru.doneathome.boomberman.error.ErrorType.INT002002;

@RestController
@RequestMapping("/authorization")
public class AuthorizationControllerImpl extends BaseControllerImpl implements AuthorizationController {

    private static final Logger log = LoggerFactory.getLogger(AuthorizationControllerImpl.class);

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private AuthorizationService authorizationService;
    @Autowired
    private UserService userService;
    @Autowired
    private Mapper mapper;


    @RequestMapping(path = "logIn", method = RequestMethod.POST)
    @Override
    public ResponseEntity<?> logIn(@RequestBody UserDTO userDTO) {
        User user = mapper.map(userDTO, User.class);
        log.info("logIn " + user.getLogin() + " " + user.getPassword());

        try {
            return HttpResponseEntityBuilder.OkResponse("JWT", authorizationService.logIn(user));
        } catch (ValidationException e) {
            return HttpResponseEntityBuilder.ErrorResponse(e.getErrorType());
        }
    }

    @Override
    @RequestMapping(path = "registration", method = RequestMethod.POST)
    public ResponseEntity<?> registration(@RequestBody UserDTO userDTO) {
        User user = mapper.map(userDTO, User.class);
        log.info("registration " + user.getLogin() + " " + user.getPassword());

        if(userService.checkUserExistByLogin(user.getLogin())) {
            return HttpResponseEntityBuilder.ErrorResponse(INT002001);
        } else {
            user.setRoleCode(RoleType.USER.name());
            userService.createUser(user);
            return HttpResponseEntityBuilder.OkResponse("OK", "пользователь создан");
        }
    }

    @RequestMapping(path = "logOut", method = RequestMethod.GET)
    @Override
    public void logOut() {
        // надо отозвать/убить, сделать не валидным, ранее выданный токен
    }

    @RequestMapping(path = "isLogIn", method = RequestMethod.GET)
    @Override
    public Boolean isLogIn() {
        // так как мы во всех запросах с клиента прикрутим токен, будем его проверять
        return null;
    }

}
