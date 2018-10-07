package ru.doneathome.boomberman.service;

import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.seviceAPI.AutarisationServiceAPI;

@Service
public class AutarisationService implements AutarisationServiceAPI {
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
