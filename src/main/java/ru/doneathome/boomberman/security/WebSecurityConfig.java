package ru.doneathome.boomberman.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

/**
 * Мы добавили этот класс чтобы работать с AuthenticationManager как с бином
 */
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // три этих разрешения необходимы для доступа к консоли лю
        http.authorizeRequests().antMatchers("/h2-**").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();


        // мутим авторизацию jwt через REST сервис
/*        http.authorizeRequests()
                .antMatchers("/authorization/**").permitAll()
               .anyRequest().authenticated();*/
  /*             .and()
               //.exceptionHandling().authenticationEntryPoint()
               .and()
               .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);*/

        //http.addFilterBefore(authenticationJwtTokenFilter())
    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


//    @Bean
//    public JwtAuthTokenFilter authenticationJwtTokenFilter() {
//        return new JwtAuthTokenFilter();
//    }
}
