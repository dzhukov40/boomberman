package ru.doneathome.boomberman.security;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import ru.doneathome.boomberman.model.Grant;
import ru.doneathome.boomberman.model.User;

public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getLogin(),
                "1", //user.getFirstname(),
                "1", //user.getLastname(),
                "1", //user.getEmail(),
                "1", //user.getPassword(),
                mapToGrantedAuthorities(user.getGrants()),
                true, //user.getEnabled(),
                new Date() //user.getLastPasswordResetDate()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Grant> grants) {
        return grants.stream()
                .map(grant -> new SimpleGrantedAuthority(grant.getGrantCode()))
                .collect(Collectors.toList());
    }
}
