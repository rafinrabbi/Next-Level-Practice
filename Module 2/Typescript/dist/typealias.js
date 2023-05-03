"use strict";
const userId = {
    name: 'zahir',
    age: 34,
    address: 'Dhaka'
};
const calculate = (num1, num2, operation) => operation(num1, num2);
console.log(calculate(34, 56, (x, y) => x + y));
