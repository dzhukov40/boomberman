

DROP TABLE IF EXISTS tort;
CREATE TABLE tort
(
  guid varchar(36) NOT NULL,
  last_editing_date  TIMESTAMP NOT NULL,
  login varchar(255) not null,
  password varchar(255) not null,

  primary key (guid)

);







