package ru.doneathome.boomberman.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.seviceAPI.AutarisationService;
import ru.doneathome.boomberman.service.seviceAPI.UserSevrice;

@Service
public class AutarisationServiceImpl implements AutarisationService {

    @Autowired
    private UserSevrice userSevrice;

    @Override
    public void logIn(User user) {

    }

    @Override
    public void logOut() {

    }

    @Override
    public Boolean isLogIn() {
        return null;
    }
}
