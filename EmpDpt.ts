interface Employeee{
    id : number;
    name : string;
    departmentid: number;
    salary: number;
}

class company{
    employees: Employeee[] = [];
    
    addemployees(employee: Employeee): void{
        this.employees.push(employee);
    }

    getempbydptandtotalsalary(departmentid: number): number{
        let filtemp = this.employees.filter(employee => employee.departmentid === departmentid);
        return filtemp.reduce((sum, emp) => sum + emp.salary, 0);
    }
    getempbydpt(departmentid: number): Employeee[]{
        return this.employees.filter(employee => employee.departmentid === departmentid);
    }
}

const c = new company();
c.addemployees({id: 1,name: "Goutham",departmentid: 102,salary: 2222});

console.log(c.getempbydptandtotalsalary(102))
