package ru.doneathome.boomberman.service.seviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.exception.ValidationException;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.AuthorizationService;
import ru.doneathome.boomberman.service.UserSevrice;
import ru.doneathome.boomberman.validation.AuthorizationValidation;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {

    @Autowired
    private UserSevrice userSevrice;
    @Autowired
    private AuthorizationValidation authorizationValidation;

    @Override
    public void logIn(User logInUser) throws ValidationException {
        authorizationValidation.toValedUserExist(logInUser);



    }

    @Override
    public void logOut() {

    }

    @Override
    public void registration(User user) throws ValidationException {
        authorizationValidation.toValedUserloginExist(user);

        userSevrice.createUser(user);
    }

    @Override
    public Boolean isLogIn() {
        return null;
    }
}
