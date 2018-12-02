package ru.doneathome.boomberman.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import ru.doneathome.boomberman.security.service.JwtUserDetailsService;


/**
 * Мы добавили этот класс чтобы работать с AuthenticationManager как с бином
 */
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final String URL_WILDCARD = "/**";

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    // наш фильтр, где мы будем вытаскивать из заголовка токен, валидировать, засовывать в контекст
    @Autowired
    JwtAuthorizationTokenFilter authenticationTokenFilter;

    @Value("${jwt.header}")
    private String tokenHeader;
    @Value("${jwt.route.authentication.path}")
    private String authenticationPath;
    @Value("${spring.h2.console.path}")
    private  String h2consolePath;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(jwtUserDetailsService)
                .passwordEncoder(passwordEncoderBean());
    }

    /**
     * Этот бин будем использовать для кодирования пароля пользователя
     * @return
     */
    @Bean
    public BCryptPasswordEncoder passwordEncoderBean() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()  // для нас необходима работа h2 консоли

                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)// don't create session
                .and()
                .authorizeRequests()
                .antMatchers(h2consolePath + URL_WILDCARD).permitAll()
                .antMatchers(authenticationPath + URL_WILDCARD).permitAll()
                .antMatchers("/echo" + URL_WILDCARD).permitAll()
                .anyRequest().authenticated();

        http
                .headers()
                .frameOptions().sameOrigin()  // для нас необходима работа h2 консоли
                .cacheControl();

        // это добавление нами написанного фильтра "JwtAuthorizationTokenFilter" в цепочку фильтров
        http.addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }


    @Override
    public void configure(WebSecurity web) throws Exception {
        // разрешаем всем работать в API авторизации
        web
                .ignoring()
                .antMatchers(
                        HttpMethod.POST,
                        authenticationPath
                )

                // разрешаем всем получать статику
                .and()
                .ignoring()
                .antMatchers(
                        HttpMethod.GET,
                        "/",
                        "/*.html",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js"
                )

                // необхожимо игнорировать url h2 консоли
                .and()
                .ignoring()
                .antMatchers(h2consolePath + URL_WILDCARD);
    }
}
