package ru.doneathome.boomberman.service.seviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.AuthorizationService;
import ru.doneathome.boomberman.service.SecurityService;
import ru.doneathome.boomberman.service.UserService;
import ru.doneathome.boomberman.validation.AuthorizationValidation;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthorizationValidation authorizationValidation;
    @Autowired
    private SecurityService securityService;

    @Override
    public String logIn(User logInUser) throws ValidationException {
        User user = userService.getUserByLogin(logInUser.getLogin());

        authorizationValidation.toValidateUserExist(user);
        authorizationValidation.toValidatePassword(logInUser.getPassword(), user.getPassword());

        return securityService.autoLogIn(logInUser.getLogin(), logInUser.getPassword());
    }

    @Override
    public void logOut() {

    }

    @Override
    public void registration(User user) throws ValidationException {
        authorizationValidation.toValidateUserloginExist(user);

        userService.createUser(user);
    }

    @Override
    public Boolean isLogIn() {
        return null;
    }
}
