const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
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
  const query = ``;
}
