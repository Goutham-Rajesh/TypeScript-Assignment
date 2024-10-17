var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeAge) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
    }
    return Employee;
}());
var uniqueEmployeeIds = new Set();
function addEmployee(employeeId, employeeName, employeeAge) {
    if (uniqueEmployeeIds.has(employeeId)) {
        console.log("Employee ID ".concat(employeeId, " already exists. Employee not added."));
    }
    else {
        var newEmployee = new Employee(employeeId, employeeName, employeeAge);
        uniqueEmployeeIds.add(employeeId);
        console.log(newEmployee);
    }
}
addEmployee(100, "Goutham", 22); // Adds the employee
addEmployee(100, "Alan", 30); // Will not add this employee, ID already exists
addEmployee(101, "Lucifer", 25); // Adds this employee
