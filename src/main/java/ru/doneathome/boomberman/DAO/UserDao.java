package ru.doneathome.boomberman.DAO;

import org.springframework.stereotype.Repository;
import ru.doneathome.boomberman.DAO.DaoApi.Dao;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.model.User;

@Repository
public class UserDao implements Dao<User> {

    @Override
    public User findById(Long id, String... properties) {
        return null;
    }

    @Override
    public void saveOrUpdate(User entity) {

    }

    @Override
    public Long add(User entity) {
        return null;
    }

    @Override
    public void delete(User entity) {

    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public User merge(User entity) {
        return null;
    }

    @Override
    public void evict(User entity) {

    }

    @Override
    public User findAndLock(Long id) {
        return null;
    }
}


