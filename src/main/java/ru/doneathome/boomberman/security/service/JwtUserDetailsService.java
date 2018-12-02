package ru.doneathome.boomberman.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.service.UserService;

import java.util.HashSet;
import java.util.Set;

import static java.util.Objects.isNull;

/**
 * Implementation of {@link UserDetailsService} interface
 *
 * Тут имплементируем спринговый интерфейс и реализуем метод получения
 * пользователя и его ролей из BD
 */
@Service("JwtUserDetailsService")
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByLogin(username);
        if (isNull(user)) {
            return null;
        }

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(user.getRoleCode()));

        // есть и другие конструкторы, пожирнее
        return new org.springframework.security.core.userdetails.User(
                user.getLogin(),
                user.getPassword(),
                grantedAuthorities);
    }

}
