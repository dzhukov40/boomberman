package ru.doneathome.boomberman.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.security.service.JwtAuthenticationResponse;
import ru.doneathome.boomberman.security.service.JwtUserDetailsService;
import ru.doneathome.boomberman.service.SecurityService;

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
    public String autoLogIn(String username, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
/*
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());


        authenticationManager.authenticate(authenticationToken);

        if(authenticationToken.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }
*/


        return jwtTokenUtil.generateToken(userDetails);
    }


}
