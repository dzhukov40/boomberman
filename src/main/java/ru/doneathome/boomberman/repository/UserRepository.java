package ru.doneathome.boomberman.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.doneathome.boomberman.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByLogin(String login);

}
