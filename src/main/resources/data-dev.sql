/*
insert into user
values('Denis', '12345');

*/

// добавим пользователея для примера авторизации
insert into bomb.user values (1,'2018-02-02T00:00:00+00:00','admin','admin');
insert into bomb.user values (2,'2018-03-02T00:00:00+00:00','den','12345');
insert into bomb.user values (3,'2018-04-02T00:00:00+00:00','imba','qwerty');


// это различные права, которые могут быть в любом количестве у любого пользователя
insert into bomb.grant values (1,'2018-04-02T00:00:00+00:00','CREATE_GAME');
insert into bomb.grant values (2,'2018-04-02T00:00:00+00:00','WATCH_GAME');
insert into bomb.grant values (3,'2018-04-02T00:00:00+00:00','READ_CHAT');
insert into bomb.grant values (4,'2018-04-02T00:00:00+00:00','WRITE_CHAT');


// установим связи 'user' <-> 'grant'
insert into bomb.bomb.user_grant values (1,'2018-04-02T00:00:00+00:00', 1, 1);
insert into bomb.bomb.user_grant values (2,'2018-04-02T00:00:00+00:00', 1, 2);
insert into bomb.bomb.user_grant values (3,'2018-04-02T00:00:00+00:00', 1, 3);
insert into bomb.bomb.user_grant values (4,'2018-04-02T00:00:00+00:00', 1, 4);


insert into bomb.bomb.user_grant values (5,'2018-04-02T00:00:00+00:00', 2, 1);
insert into bomb.bomb.user_grant values (6,'2018-04-02T00:00:00+00:00', 2, 2);
insert into bomb.bomb.user_grant values (7,'2018-04-02T00:00:00+00:00', 2, 3);


insert into bomb.bomb.user_grant values (8,'2018-04-02T00:00:00+00:00', 3, 1);
insert into bomb.bomb.user_grant values (9,'2018-04-02T00:00:00+00:00', 3, 2);

