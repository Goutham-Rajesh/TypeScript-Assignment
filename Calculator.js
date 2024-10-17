var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.mul = function (a, b) {
        return a * b;
    };
    Calculator.prototype.div = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    };
    return Calculator;
}());
var cal = new Calculator();
console.log(cal.add(1, 2));
console.log(cal.sub(1, 2));
console.log(cal.mul(1, 2));
console.log(cal.div(1, 2));
