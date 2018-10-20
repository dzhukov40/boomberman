DROP SCHEMA IF EXISTS boomb;
CREATE SCHEMA boomb;


//---
DROP TABLE IF EXISTS boomb.user;
CREATE TABLE boomb.user
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  login varchar(255) not null,
  password varchar(255) not null,

  unique (id)
);

DROP INDEX IF EXISTS boomb_user_id_index;
CREATE INDEX boomb_user_id_index ON boomb.user (id);



//---
DROP TABLE IF EXISTS boomb.role;
CREATE TABLE boomb.role
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  name varchar(255) not null,

  unique (id)
);

DROP INDEX IF EXISTS boomb_role_id_index;
CREATE INDEX boomb_role_id_index ON boomb.role (id);



//---
DROP TABLE IF EXISTS boomb.user_role;
CREATE TABLE boomb.user_role
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  user_id bigint NOT NULL,
  role_id bigint NOT NULL,


  unique (id),
  foreign key (user_id) references boomb.user(id),
  foreign key (role_id) references boomb.role(id)
);

DROP INDEX IF EXISTS boomb_user_role_id_index;
CREATE INDEX boomb_user_role_id_index ON boomb.user_role (id);















