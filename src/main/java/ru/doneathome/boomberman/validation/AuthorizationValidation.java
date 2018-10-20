package ru.doneathome.boomberman.validation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.doneathome.boomberman.error.Error;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.UserSevrice;


@Component
public class AuthorizationValidation {

    @Autowired
    private UserSevrice userSevrice;


    public void toValedUserExist(User user) throws ValidationException {
        User registrationUser = userSevrice.getUserByLogin(user.getLogin());

        if(registrationUser == null) {
            throw new ValidationException(Error.INT002002);
        }
    }

    public void toValedUserloginExist(User user) throws ValidationException {
        User registrationUser = userSevrice.getUserByLogin(user.getLogin());

        if(registrationUser != null) {
            throw new ValidationException(Error.INT002001);
        }
    }

}
