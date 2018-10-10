package ru.doneathome.boomberman.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import ru.doneathome.boomberman.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

    User findByLogin(String login);

}
