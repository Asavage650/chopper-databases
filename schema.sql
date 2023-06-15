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
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30), NOT NULL,
    role_id INT,
    manager_id INT NOT NULL
);

USE employees;
INSERT INTO department (name)
VALUES ('Accounting'),
       ('Operations'),
       ('Engineering'),
       ('Sales');
INSERT INTO role (title, salary, department_id,)
VALUES ('Accounting manager',150000, 1),
       ('Accountant',100000, 1),
       ('Head of Operations',160000, 2),
       ('General operator', 100500, 2),
       ('Lead Engineer', 200000, 3),
       ('Engineer', 90000, 3),
       ('Sales Manager', 100000, 4),
       ('Sales', 90500, 4);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ('JOHN','DOE', 1, 1),
       ('STACY', 'LISA', 2, NULL),
       ('MIGUEL', 'OHARA', 3, 2),
       ('MILES','MORALES', 4, NULL),
       ('OLIVE', 'OIL', 5, 3),
       ('ALEXIUS','SAVAGE',6, NULL),
       ('MARY','SUE', 7, 4),
       ('BOBBY','HILL', 8, NULL);         


 