USE employee_db;

INSERT INTO department(name)
VALUES
("sales"),
("legal"),
("finance"),
("engineering");

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, 1),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, 2),
("Kevin", "Tupik", 4, 2),
("Malia", "Brown", 5, 3),
("Sarah", "Lourd", 6, 3),
("Tom", "Allen", 7, 4),
("Christian", "Eckenrode", 8, 5);

INSERT INTO role(title, salary, department_id)
VALUES
("sales lead", 50000, 1),
("lead engineer", 60000, 2),
("software engineer", 70000, 3),
("salesperson", 80000, 4),
("accountant", 90000, 5),
("legal team lead", 100000, 6),
("lawyer", 110000, 7);