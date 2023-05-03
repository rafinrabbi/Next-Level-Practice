"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const arrowAdd = (num1, num2) => num1 + num2;
//callback function
const arr = [1, 2, 4, 5, 6];
const newArray = arr.map((elem) => elem * elem);
