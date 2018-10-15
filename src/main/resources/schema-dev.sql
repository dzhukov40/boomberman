DROP SCHEMA IF EXISTS boomb;
CREATE SCHEMA boomb;

DROP TABLE IF EXISTS boomb.user;
CREATE TABLE boomb.user
(
  id bigint NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  login varchar(255) not null,
  password varchar(255) not null,

  primary key (id)

);







