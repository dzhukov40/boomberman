package ru.doneathome.boomberman.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.repository.UserRepository;
import ru.doneathome.boomberman.service.seviceAPI.UserSevrice;

@Service
public class UserServiceImpl implements UserSevrice {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public User getUserByLogin(String userLogin) {
        return userRepository.findByLogin(userLogin);
    }

    @Override
    public void createUser(User user) {
        userRepository.save(user);
    }


}
