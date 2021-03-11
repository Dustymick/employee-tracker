USE employee_db;

INSERT INTO department(name)
VALUES
("sales"),
("legal"),
("finance"),
("engineering");

INSERT INTO employee(first_name, last_name, manager_id, employee_db)
VALUES
("John", "Doe"),
("Mike", "Chan"),
("Ashley", "Rodriguez"),
("Kevin", "Tupik"),
("Malia", "Brown"),
("Sarah", "Lourd"),
("Tom", "Allen"),
("Christian", "Eckenrode");

INSERT INTO role(title, salary, department_id)
VALUES
("sales lead"),
("lead engineer"),
("software engineer"),
("salesperson"),
("accountant"),
("legal team lead"),
("lawyer");