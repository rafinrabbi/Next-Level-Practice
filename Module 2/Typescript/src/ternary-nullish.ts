const age: number = 27;

const isAdult = age > 18 ? "Yes" : "No";
console.log(isAdult);

// nullish and Coeslancing operator
let something = null;

const checkNull = something ?? 'It is Null';
console.log(checkNull); //output: It is Null
