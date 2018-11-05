package ru.doneathome.boomberman.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import ru.doneathome.boomberman.service.SecurityService;

@Service
public class SecurityServiceImpl implements SecurityService {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Override
    public String findLoggedInUserName() {
        Object details = SecurityContextHolder.getContext().getAuthentication().getDetails();
        UserDetails userDetails = (details instanceof UserDetails) ? (UserDetails)details : null;

        return userDetails != null ? userDetails.getUsername() : null;
    }

    @Override
    public void autoLogIn(String username, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());


        authenticationManager.authenticate(authenticationToken);

        if(authenticationToken.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

    }
}
