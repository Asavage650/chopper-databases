DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNSIGNED AUTO_INCREMENT NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary VARCHAR(30) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT
);

USE employees;
INSERT INTO department
(name)
VALUES
 ()
 ()
 ()
 ()