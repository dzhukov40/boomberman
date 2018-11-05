package ru.doneathome.boomberman.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.security.enums.GrantType;
import ru.doneathome.boomberman.service.UserSevrice;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static java.util.Objects.isNull;

/**
 * Implementation of {@link UserDetailsService} interface
 *
 * Тут имплементируем спринговый интерфейс и реализуем метод получения
 * пользователя и его ролей из BD
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserSevrice userService;


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByLogin(username);
        if (isNull(user)) {
            return null;
        }

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        user.getGrants().forEach(grant -> grantedAuthorities
                .add(new SimpleGrantedAuthority(Objects.requireNonNull(GrantType.getByCode(grant.getGrantCode())).name())));

        return new org.springframework.security.core.userdetails.User(
                user.getLogin(),
                user.getPassword(),
                grantedAuthorities);
    }

}
