package ru.doneathome.boomberman.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import ru.doneathome.boomberman.model.User;
import ru.doneathome.boomberman.repository.UserRepository;
import ru.doneathome.boomberman.service.modelBuilders.UserBuilder;

import java.util.Optional;

import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserServiceImpl userService;


    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void getUserById() {
        final Long ID = 1L;
        User testUser = UserBuilder.getUser(ID);

        when(userRepository.findById(ID)).thenReturn(Optional.ofNullable(UserBuilder.getUser(ID)));
        User getUser = userService.getUserById(ID);

        assert (testUser.equals(getUser));
    }

    @Test
    public void getUserByLogin() {
        final String LOGIN = "denis";
        User testUser = UserBuilder.getUser(LOGIN);

        when(userRepository.findByLogin(LOGIN)).thenReturn(testUser);
        User getUser = userService.getUserByLogin(LOGIN);

        assert (testUser.equals(getUser));
    }












}