class Calculator{
    add(a:number,b:number):number{
        return a+b;
    }
    sub(a:number,b:number):number{
        return a-b;
    }
    mul(a:number,b:number):number{
        return a*b;
    }
    div(a:number,b:number):number{
        if(b===0){
            throw new Error("Division by zero is not allowed");
        }      
        return a/b;
    }
}

const cal = new Calculator();

console.log(cal.add(1,2));
console.log(cal.sub(1, 2));
console.log(cal.mul(1, 2));
console.log(cal.div(1, 2));
