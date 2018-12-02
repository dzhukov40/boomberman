package ru.doneathome.boomberman.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import ru.doneathome.boomberman.controller.HttResponse;
import ru.doneathome.boomberman.controller.HttpResponseEntityBuilder;
import ru.doneathome.boomberman.error.ErrorType;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        // Это вызывается, когда пользователь пытается получить доступ к защищенному ресурсу REST без указания учетных данных
        //
        // response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
        response.setStatus(200);
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        ErrorType error = ErrorType.AUT002001;
        String jsonResponse = objectMapper.writeValueAsString(new HttResponse(error.getCode(), error.getPattern()));
        response.getWriter().print(jsonResponse);
    }
}
