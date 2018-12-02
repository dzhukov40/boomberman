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
import ru.doneathome.boomberman.DTO.UserDto;
import ru.doneathome.boomberman.controller.AuthorizationController;
import ru.doneathome.boomberman.controller.HttpResponseEntityBuilder;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.mapper.Mapper;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.security.enums.RoleType;
import ru.doneathome.boomberman.service.AuthorizationService;
import ru.doneathome.boomberman.service.UserService;

import static ru.doneathome.boomberman.error.ErrorType.INT002001;

@RestController
@RequestMapping("/authorization")
public class AuthorizationControllerImpl extends BaseControllerImpl implements AuthorizationController {

    private static final Logger log = LoggerFactory.getLogger(AuthorizationControllerImpl.class);

    @Autowired
    private AuthorizationService authorizationService;
    @Autowired
    private UserService userService;
    @Autowired
    private Mapper mapper;


    @Override
    @RequestMapping(path = "logIn", method = RequestMethod.POST)
    public ResponseEntity<?> logIn(@RequestBody UserDto userDto) {
        User user = mapper.map(userDto, User.class);
        log.info("logIn " + user.getLogin() + " " + user.getPassword());

        try {
            return HttpResponseEntityBuilder.OkResponse("JWT_TOKEN", authorizationService.logIn(user));
        } catch (ValidationException e) {
            return HttpResponseEntityBuilder.ErrorResponse(e.getErrorType());
        }
    }

    @Override
    @RequestMapping(path = "registration", method = RequestMethod.POST)
    public ResponseEntity<?> registration(@RequestBody UserDto userDto) {
        User user = mapper.map(userDto, User.class);
        log.info("registration " + user.getLogin() + " " + user.getPassword());

        if(userService.checkUserExistByLogin(user.getLogin())) {
            return HttpResponseEntityBuilder.ErrorResponse(INT002001);
        } else {
            user.setRoleCode(RoleType.USER.name());
            userService.createUser(user);
            return HttpResponseEntityBuilder.OkResponse("OK", "пользователь создан");
        }
    }

    @Override
    @RequestMapping(path = "logOut", method = RequestMethod.GET)
    public void logOut() {
        // надо отозвать/убить, сделать не валидным, ранее выданный токен
    }

    @Override
    @RequestMapping(path = "isLogIn", method = RequestMethod.GET)
    public Boolean isLogIn() {
        // так как мы во всех запросах с клиента прикрутим токен, будем его проверять
        return null;
    }

}
