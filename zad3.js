const fs = require("fs");

let employees = JSON.parse(fs.readFileSync("employees.json"));
console.log(employees);

const newId = employees.length > 0 ? employees[employees.length-1].id+1 : 0;
employees.push({id: newId, name: "abc", surname: "def", age: 99});

fs.writeFileSync("employees.json", JSON.stringify(employees));

employees = JSON.parse(fs.readFileSync("employees.json"));
let employeeToFind = {};
for(employee of employees)
{
    if(employee.id === newId) employeeToFind = employee;
}

console.log(employeeToFind);