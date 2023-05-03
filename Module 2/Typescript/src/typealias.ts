type UserType = {
    name: string;
    age: number;
    address: string;
    isAdmin?: false;
}

const userId : UserType = {
    name: 'zahir',
    age:34,
    address:'Dhaka'
}

type OperationType =  (x : number,y: number) => number;

const calculate = (num1 : number, num2: number, operation: OperationType) => operation(num1, num2);
console.log(
calculate(34, 56, (x,y)=> x+y))