var company = /** @class */ (function () {
    function company() {
        this.employees = [];
    }
    company.prototype.addemployees = function (employee) {
        this.employees.push(employee);
    };
    company.prototype.getempbydptandtotalsalary = function (departmentid) {
        var filtemp = this.employees.filter(function (employee) { return employee.departmentid === departmentid; });
        return filtemp.reduce(function (sum, emp) { return sum + emp.salary; }, 0);
    };
    company.prototype.getempbydpt = function (departmentid) {
        return this.employees.filter(function (employee) { return employee.departmentid === departmentid; });
    };
    return company;
}());
var c = new company();
c.addemployees({ id: 1, name: "Goutham", departmentid: 102, salary: 2222 });
console.log(c.getempbydptandtotalsalary(102));
