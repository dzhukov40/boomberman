
CREATE SCHEMA boomb;

DROP TABLE IF EXISTS boomb.user;
CREATE TABLE boomb.user
(
  guid varchar(36) NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  login varchar(255) not null,
  password varchar(255) not null,

  primary key (guid)

);







