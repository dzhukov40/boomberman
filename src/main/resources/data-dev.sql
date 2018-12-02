/*
[?] зачем тут 'select' запросы перед операциями 'insert'
  - непонятная особенность нашего приложения, не нашел почему так но,
    первые инсерты не выполнялись для каждой новой таблицы в скрипте,
    так мы добавили запросы которые есл выполнятся или не выполнятся
    не повлияют на нашу работу
*/

// добавим пользователея для примера авторизации
select * from bomb.user;
insert into bomb.user values (1,'2018-02-02T00:00:00+00:00','admin','$2a$04$ssTLIBWeXE7dSU24PYO/hOEDaIGI13ZQohvuwdMg772aNwDJr.Q3.','ADMIN');
insert into bomb.user values (2,'2018-03-02T00:00:00+00:00','den','$2a$04$WDzSQmaowUcyX1ZK6NbgqOhiWMisJiPNa4j9xYcubVYuCF6rJ7eaK','USER');
insert into bomb.user values (3,'2018-04-02T00:00:00+00:00','imba','$2a$04$Hgn8AWHTVNCHAGkWf.IHHuCvj/HlbU/tsQbO4zMERZNAzs82ojlZG','USER');


// это различные права, которые могут быть в любом количестве у любого пользователя
select * from bomb.grant;
insert into bomb.grant values (1,'2018-04-02T00:00:00+00:00','CREATE_GAME');
insert into bomb.grant values (2,'2018-04-02T00:00:00+00:00','WATCH_GAME');
insert into bomb.grant values (3,'2018-04-02T00:00:00+00:00','READ_CHAT');
insert into bomb.grant values (4,'2018-04-02T00:00:00+00:00','WRITE_CHAT');


// установим связи 'user' <-> 'grant'
select * from bomb.user_grant;
insert into bomb.user_grant values (1,'2018-04-02T00:00:00+00:00', 1, 1);
insert into bomb.user_grant values (2,'2018-04-02T00:00:00+00:00', 1, 2);
insert into bomb.user_grant values (3,'2018-04-02T00:00:00+00:00', 1, 3);
insert into bomb.user_grant values (4,'2018-04-02T00:00:00+00:00', 1, 4);

insert into bomb.user_grant values (5,'2018-04-02T00:00:00+00:00', 2, 1);
insert into bomb.user_grant values (6,'2018-04-02T00:00:00+00:00', 2, 2);
insert into bomb.user_grant values (7,'2018-04-02T00:00:00+00:00', 2, 3);

insert into bomb.user_grant values (8,'2018-04-02T00:00:00+00:00', 3, 1);
insert into bomb.user_grant values (9,'2018-04-02T00:00:00+00:00', 3, 2);


