const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Memphis5!",
  database: "employee_db"
});

connection.connect(function(err){
  if(err) throw err
  console.log("connected as id " + connection.threadId)
  viewDepartment();
});


function viewDepartment() {
  connection.query("SELECT * FROM department", function(err, res) {
      if (err) throw err;
      console.table(res)
      askQuestions();
  })
}

function viewRole() {
  connection.query("SELECT * FROM role", function(err, res) {
      if (err) throw err;
      console.table(res)
      askQuestions();
  })
}

function viewEmployee() {
  connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      console.table(res)
      askQuestions();
  })
}

function askQuestions() {
  inquirer.prompt ([
    {
        type: "list",
        name: "name",
        message: "What would you like to do?",
        choices: ["view all employees", "view all roles", "view all departments"]

    },
    


]).then(answers => {
    console.log(answers)
    switch(answers.name) {
      case "view all departments":
      viewDepartment();

    
    }
}) 
}

askQuestions();
