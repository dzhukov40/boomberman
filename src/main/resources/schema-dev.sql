DROP SCHEMA IF EXISTS bomb;
CREATE SCHEMA bomb;

// TODO:// надо сделать наследование таблиц от общей

DROP SCHEMA IF EXISTS boomb; // просто удалимс старое

//---
DROP TABLE IF EXISTS bomb.user;
CREATE TABLE bomb.user
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  login varchar(255) not null,
  password varchar(255) not null,

  unique (id)
);

DROP INDEX IF EXISTS bomb_user_id_index;
CREATE INDEX bomb_user_id_index ON bomb.user (id);



//---
DROP TABLE IF EXISTS bomb.role;
CREATE TABLE bomb.role
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  role_code varchar(255) not null,

  unique (id)
);

DROP INDEX IF EXISTS bomb_role_id_index;
CREATE INDEX bomb_role_id_index ON bomb.role (id);



//---
DROP TABLE IF EXISTS bomb.user_role;
CREATE TABLE bomb.user_role
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  user_id bigint NOT NULL,
  role_id bigint NOT NULL,


  unique (id),
  foreign key (user_id) references bomb.user(id),
  foreign key (role_id) references bomb.role(id)
);

DROP INDEX IF EXISTS bomb_user_role_id_index;
CREATE INDEX bomb_user_role_id_index ON bomb.user_role (id);



//---
DROP TABLE IF EXISTS bomb.grant;
CREATE TABLE bomb.grant
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  grant_code varchar(255) not null,

  unique (id)
);

DROP INDEX IF EXISTS bomb_grant_id_index;
CREATE INDEX bomb_grant_id_index ON bomb.grant (id);



//---
DROP TABLE IF EXISTS bomb.user_grant;
CREATE TABLE bomb.user_grant
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  user_id bigint NOT NULL,
  grant_id bigint NOT NULL,


  unique (id),
  foreign key (user_id) references bomb.user(id),
  foreign key (grant_id) references bomb.grant(id)
);

DROP INDEX IF EXISTS bomb_user_grant_id_index;
CREATE INDEX bomb_user_grant_id_index ON bomb.user_grant (id);















