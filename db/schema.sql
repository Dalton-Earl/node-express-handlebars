CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE    burger
(
    id int not null PRIMARY KEY auto_increment,
    burger_name varchar(65),
    devoured BOOLEAN default false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp

);