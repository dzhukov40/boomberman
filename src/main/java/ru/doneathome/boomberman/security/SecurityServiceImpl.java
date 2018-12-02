package ru.doneathome.boomberman.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.exception.AuthenticationException;
import ru.doneathome.boomberman.security.service.JwtUserDetailsService;
import ru.doneathome.boomberman.service.SecurityService;

import java.util.Objects;

@Service
public class SecurityServiceImpl implements SecurityService {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @Override
    public String findLoggedInUserName() {
        Object details = SecurityContextHolder.getContext().getAuthentication().getDetails();
        UserDetails userDetails = (details instanceof UserDetails) ? (UserDetails)details : null;

        return userDetails != null ? userDetails.getUsername() : null;
    }

    @Override
    public String authenticate(String username, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities()));
        } catch (DisabledException e) {
            throw new AuthenticationException("Пользователь отключен!", e);
        } catch (BadCredentialsException e) {
            throw new AuthenticationException("Неверные учетные данные!", e);
        }

        return jwtTokenUtil.generateToken(userDetails);
    }

}
