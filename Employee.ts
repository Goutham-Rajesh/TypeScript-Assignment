class Employee {
    employeeId: number;
    employeeName: string;
    employeeAge: number;

    constructor(employeeId: number, employeeName: string, employeeAge: number) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
    }
}

const uniqueEmployeeIds = new Set<number>();

function addEmployee(employeeId: number, employeeName: string, employeeAge: number): void {
    if (uniqueEmployeeIds.has(employeeId)) {
        console.log(`Employee ID ${employeeId} already exists. Employee not added.`);
    } else {
        const newEmployee = new Employee(employeeId, employeeName, employeeAge);
        uniqueEmployeeIds.add(employeeId);
        console.log(newEmployee);
    }
}

addEmployee(100, "Goutham", 22); // Adds the employee
addEmployee(100, "Alan", 30);   // Will not add this employee, ID already exists
addEmployee(101, "Lucifer", 25);   // Adds this employee