const jwt = require('jsonwebtoken');

const employee = [{
    id: 1,
    emp_name: "Nitin",
    job_name: "Software Engineer",
    salary: 100,
    hire_Date: "01/01/2020"
}];

function getEmployee(req, res) {
    return res.send(employee);
}

function addEmployee(req, res) {
    const { empName, jobName, salary, hireDate } = req.body;
    const id = employee.length + 1;
    employee.push({
        id,
        emp_name: empName,
        job_name: jobName,
        salary: salary,
        hire_Date: hireDate
    });

    return res.send("Employee added successfully");
}

function updateEmployee(req, res) {
    const id = req.params.id;
    const {empName, jobName, salary, hireDate} = req.body;


    const index = employee.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("Employee not found");
    } 

    employee[index].emp_name = empName;
    employee[index].job_name = jobName;
    employee[index].salary = salary;
    employee[index].hire_Date = hireDate;
    return res.send("Employee updated successfully");

}

function deleteEmployee(req, res) {
    const id = req.params.id;
    const index = employee.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("Employee not found");
    } 

    employee.splice(index, 1);
    return res.send("Employee deleted successfully");


}

module.exports = {
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}