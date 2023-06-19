const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { default: Prompt } = require("inquirer/lib/prompts/base");
const mysql = require("mysql");
require("console.table");

const prompts = {
  viewAlldepartments: "View all departments",
  viewAllroles: "View all roles",
  viewAllEmployees: "View all employees",
  addAdepartment: "Add a department",
  addaRole: "Add a role",
  addAnEmployee: "Add an employee",
  updateAnemployeeRole: "Update an employee role",
};

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "elide",
  database: "employees",
});

connection.connect((err) => {
  if (err) throw err;
  prompt();
});

function prompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      Choices: [
        prompts.viewAlldepartments,
        prompts.viewAllroles,
        prompts.viewAllEmployees,
        prompts.addAdepartment,
        prompts.addaRole,
        prompts.addAnEmployee,
        prompts.updateAnemployeeRole,
      ],
    })
    .then((answer) => {
      console.log("answer", answer);
      switch (answer.action) {
        case prompts.viewAlldepartments:
          viewAlldepartments();

        case prompts.viewAllroles:
          viewAllroles();

        case prompts.viewAllEmployees:
          viewAllEmployees();

        case prompts.addAdepartment:
          addAdepartment();

        case prompts.addaRole:
          addaRole();

        case prompts.addAnEmployee:
          addAnEmployee();

        case prompts.updateAnemployeeRole:
          updateAnemployeeRole();
      }
    });
}

function viewAlldepartments() {
  const query = `SELECT department.name, AS department, role.title, employee.id, employee.first_name, employee.last_name
  FROM employee
  LEFT JOIN role ON (role.id = employee.role_id)
  LEFT JOIN department ON (department.id = role.department_id)
  ORDER BY department.name;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW EMPLOYEE BY DEPARTMENT");
    console.log("\n");
    console.table(res);
    prompt();
  });
}

function viewAllroles() {
  const query = `SELECT role.title, employee.id, employee.first_name. employee.last_name, department.name AS department
  FROM employee
  LEFT JOIN role ON (role.id = employee.role_id)
  LEFT JOIN department ON (department.id = role.department_id)
  ORDER BY role.title;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW EMPLOYEE BY ROLE");
    console.log("\n");
    console.table(res);
    prompt();
  });
}

function viewAllEmployees() {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,'',manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (role.id = employee.role_id)
  INNER JOIN department ON (department.id = role.department_id)
  ORDER BY employee.id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW ALL EMPLOYEES");
    console.log("\n");
    console.table(res);
    prompt();
  });
}

async function addAdepartment() {
  const addDepartment = await inquirer.prompt(askDep());
  connection.query(
    "SELECT role.id, role.title FROM role ORDER BY role.id;",
    async (err, res) => {
      if (err) throw err;
      const { addDepartment } = await inquirer.prompt([
        {
          name: "Department",
        },
      ]);
    }
  );
}
