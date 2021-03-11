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
  })
}

function askQuestions() {
  inquirer.prompt
}

