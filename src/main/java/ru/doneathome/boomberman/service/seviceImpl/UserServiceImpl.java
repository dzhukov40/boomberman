package ru.doneathome.boomberman.service.seviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.repository.UserRepository;
import ru.doneathome.boomberman.service.UserService;

@Service
public class UserServiceImpl implements UserService {

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
    public Boolean checkUserExistByLogin(String userLogin) {
        return userRepository.findByLogin(userLogin) != null;
    }

    @Override
    public void createUser(User user) {
        userRepository.save(user);
    }

}
