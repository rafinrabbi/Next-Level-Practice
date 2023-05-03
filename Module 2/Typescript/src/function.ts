function add (num1 : number, num2 : number):number{
    return num1+num2;
}
const arrowAdd = (num1: number, num2: number) :number => num1+num2;
//callback function
const arr = [1,2,4,5,6];
const newArray = arr.map((elem:number) => elem*elem)