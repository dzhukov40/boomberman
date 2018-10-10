package ru.doneathome.boomberman.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.repository.UserRepository;
import ru.doneathome.boomberman.service.seviceAPI.UserSevrice;

@Service
public class UserServiceImpl implements UserSevrice {

    @Autowired
    UserRepository userRepository;


    @Override
    public User getUserByGuid(String userGuid) {
        return userRepository.getOne(userGuid);
    }

    @Override
    public User getUserByLogin(String userLogin) {
        return userRepository.findByLogin(userLogin);
    }
}
