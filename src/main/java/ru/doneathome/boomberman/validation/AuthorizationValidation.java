package ru.doneathome.boomberman.validation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.doneathome.boomberman.error.ErrorType;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.UserService;


@Component
public class AuthorizationValidation {

    @Autowired
    private UserService userService;


    public void toValidateUserExist(User user) throws ValidationException {
        if(user == null) {
            throw new ValidationException(ErrorType.INT002002);
        }
    }

    public void toValidatePassword(String password, String userPassword) throws ValidationException {
        if(!password.equals(userPassword)) {
            throw new ValidationException(ErrorType.INT002003);
        }
    }

    public void toValidateUserloginExist(User user) throws ValidationException {
        User registrationUser = userService.getUserByLogin(user.getLogin());

        if(registrationUser != null) {
            throw new ValidationException(ErrorType.INT002001);
        }
    }

}
